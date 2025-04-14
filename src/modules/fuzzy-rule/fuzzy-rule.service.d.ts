import { PrismaService } from 'src/common/services/prisma.service';
import { FuzzyRule, Prisma } from '@prisma/client';
export declare class FuzzyRuleService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createFuzzyRule(data: Prisma.FuzzyRuleCreateInput): Promise<FuzzyRule>;
    findAll(): Promise<FuzzyRule[]>;
    findOne(id: string): Promise<FuzzyRule>;
    updateFuzzyRule(id: string, data: Prisma.FuzzyRuleUpdateInput): Promise<FuzzyRule>;
    removeFuzzyRule(id: string): Promise<{
        id: string;
        ageRange: string;
        weightMin: number;
        weightMax: number;
        heightMin: number;
        heightMax: number;
        zsTbuMin: number;
        zsTbuMax: number;
        zsBBuMin: number;
        zsBBuMax: number;
        output: import(".prisma/client").$Enums.OutputType;
    }>;
}
