import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/common/services/prisma.service';
import { CreateFuzzyDetectionDto } from './dto/create-fuzzy-detection.dto';
import { FuzzyRule, OutputType } from '@prisma/client';

@Injectable()
export class FuzzyDetectionService {
  constructor(private readonly prisma: PrismaService) {}

  async detectStunting(fuzzyDetection: CreateFuzzyDetectionDto) {
    const { balitaId, date, birthHeight, birthWeight, zsBBu, zsTbu } =
      fuzzyDetection;
    console.log('Input:', { birthWeight, birthHeight, zsTbu, zsBBu });

    const fuzzyRules = await this.prisma.fuzzyRule.findMany();

    const membershipValues = this.fuzzifyInput(
      birthWeight,
      birthHeight,
      zsTbu,
      zsBBu,
      fuzzyRules,
    );

    const { output, score } = this.applyFuzzyTsukamoto(membershipValues);

    const currentAge = await this.calculateAgeInMonths(balitaId);

    const measurement = await this.prisma.measurement.create({
      data: {
        balitaId,
        date,
        currentWeight: birthWeight,
        currentHeight: birthHeight,
        currentAge,
        outputFuzzy: output,
        fuzzyScore: score,
      },
    });

    return measurement;
  }

  private fuzzifyInput(
    birthWeight: number,
    birthHeight: number,
    zsTbU: number,
    zsBBU: number,
    rules: FuzzyRule[],
  ) {
    const membershipValues = [];

    for (const rule of rules) {
      // Fuzzification for birth weight
      const weightMembership = this.calculateMembership(
        birthWeight,
        rule.weightMin,
        rule.weightMax,
      );

      // Fuzzification for birth height
      const heightMembership = this.calculateMembership(
        birthHeight,
        rule.heightMin,
        rule.heightMax,
      );

      const zsTbUMembership = this.calculateMembership(
        zsTbU,
        rule.zsTbuMin,
        rule.zsTbuMax,
      );

      const zsBbUMembership = this.calculateMembership(
        zsBBU,
        rule.zsBBuMin,
        rule.zsBBuMax,
      );

      // Store membership values regardless of whether they are zero
      membershipValues.push({
        weightMembership,
        heightMembership,
        zsTbUMembership,
        zsBbUMembership,
        output: rule.output,
      });

      console.log(
        `Rule: ${rule.output}, Weight Membership: ${weightMembership}, Height Membership: ${heightMembership}`,
      );
    }

    return membershipValues;
  }

  private calculateMembership(input: number, min: number, max: number): number {
    if (input < min || input > max) {
      return 0;
    } else if (input === min || input === max) {
      return 1;
    } else {
      return (input - min) / (max - min); // Linear interpolation
    }
  }

  private applyFuzzyTsukamoto(membershipValues: any[]) {
    let numerator = 0;
    let denominator = 0;

    for (const membership of membershipValues) {
      // Calculate the truth degree using minimum of weight, height, Z-scores memberships
      const truthDegree = Math.min(
        membership.weightMembership,
        membership.heightMembership,
        membership.zsTbUMembership,
        membership.zsBbUMembership,
      );

      // Defuzzification step: weighted average based on output type
      const outputScore = this.getOutputScore(membership.output);

      // Weighted average formula
      numerator += truthDegree * outputScore;
      denominator += truthDegree;

      console.log('Truth Degree:', truthDegree);
    }

    // If denominator is zero, no valid rules matched, return default output
    if (denominator === 0) {
      return { output: OutputType.NORMAL, score: 1 }; // Default to NORMAL
    }

    const score = denominator !== 0 ? numerator / denominator : 0;
    console.log('Numerator:', numerator);
    console.log('Denominator:', denominator);
    console.log('Score:', score);

    // Return the final output based on the defuzzified score
    const output = score >= 0.5 ? OutputType.NORMAL : OutputType.STUNTING;
    console.log('Final Output:', output);
    return { output, score };
  }

  private getOutputScore(output: OutputType): number {
    if (output === OutputType.STUNTING) return 0; // 0 represents Stunting
    if (output === OutputType.NORMAL) return 1; // 1 represents Normal
  }

  private async calculateAgeInMonths(balitaId: string): Promise<number> {
    const balita = await this.prisma.balita.findUnique({
      where: { id: balitaId },
      select: { birth: true },
    });

    const birthDate = new Date(balita.birth);
    const currentDate = new Date();

    const yearsDifference = currentDate.getFullYear() - birthDate.getFullYear();
    const monthsDifference = currentDate.getMonth() - birthDate.getMonth();
    const ageInMonths = yearsDifference * 12 + monthsDifference;

    // Jika hari lahir lebih besar dari hari saat ini, kurangi 1 bulan
    if (currentDate.getDate() < birthDate.getDate()) {
      return ageInMonths - 1;
    }

    return ageInMonths;
  }

  async findAll(page: number = 1, limit: number = 5) {
    const pageSize = Number(limit);
    const skip = (Number(page) - 1) * pageSize;
    const measurement = await this.prisma.measurement.findMany({
      include: {
        balita: true,
      },
      orderBy: {
        date: 'desc',
      },
      take: pageSize,
      skip,
    });

    const total = await this.prisma.measurement.count();

    return {
      measurement,
      page: Number(page),
      totalPages: Math.ceil(total / pageSize),
    };
  }

  async findOne(balitaId: string) {
    return await this.prisma.measurement.findFirst({
      where: {
        balitaId,
      },
      select: {
        balita: {
          select: {
            name: true,
          },
        },
        fuzzyScore: true,
        outputFuzzy: true,
        date: true,
        currentAge: true,
      },
      orderBy: {
        date: 'desc',
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} fuzzyDetection`;
  }
}

// const isOutRange = fuzzyRules.every((rule, index) => {
  //   const isOfOutRange =
    //     birthWeight >= rule.weightMin &&
    //     birthWeight <= rule.weightMax &&
    //     birthHeight >= rule.heightMin &&
    //     birthHeight <= rule.heightMax &&
    //     zsTbu >= rule.zsTbuMin &&
    //     zsTbu <= rule.zsTbuMax &&
    //     zsBBu >= rule.zsBBuMin &&
    //     zsBBu <= rule.zsBBuMax;

    //   console.log(`Rule ${index + 1}:`, rule);
    //   console.log(
    //     `- birthWeight (${birthWeight}) >= rule.weightMin (${rule.weightMin}) =>`,
    //     birthWeight >= rule.weightMin,
    //   );
    //   console.log(
    //     `- birthWeight (${birthWeight}) <= rule.weightMax (${rule.weightMax}) =>`,
    //     birthWeight <= rule.weightMax,
    //   );
    //   console.log(
    //     `- birthHeight (${birthHeight}) >= rule.heightMin (${rule.heightMin}) =>`,
    //     birthHeight >= rule.heightMin,
    //   );
    //   console.log(
    //     `- birthHeight (${birthHeight}) <= rule.heightMax (${rule.heightMax}) =>`,
    //     birthHeight <= rule.heightMax,
    //   );
    //   console.log(
    //     `- zsTbu (${zsTbu}) >= rule.zsTbuMin (${rule.zsTbuMin}) =>`,
    //     zsTbu >= rule.zsTbuMin,
    //   );
    //   console.log(
    //     `- zsTbu (${zsTbu}) <= rule.zsTbuMax (${rule.zsTbuMax}) =>`,
    //     zsTbu <= rule.zsTbuMax,
    //   );
    //   console.log(
    //     `- zsBBu (${zsBBu}) >= rule.zsBBuMin (${rule.zsBBuMin}) =>`,
    //     zsBBu >= rule.zsBBuMin,
    //   );
    //   console.log(
    //     `- zsBBu (${zsBBu}) <= rule.zsBBuMax (${rule.zsBBuMax}) =>`,
    //     zsBBu <= rule.zsBBuMax,
    //   );
    //   console.log(`- Result for this rule:`, isOfOutRange);
    //   console.log('-------------------------------------');

    //   return isOfOutRange;
    // });

    // if (isOutRange) {
    //   throw new BadRequestException(
    //     'Input data diluar rentang yang ditentukan',
    //   );
    // }