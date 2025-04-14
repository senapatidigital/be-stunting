import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';
import { VariableFuzzy } from '@prisma/client';

@Injectable()
export class VariablesService {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(): Promise<VariableFuzzy[]> {
    return await this.prisma.variableFuzzy.findMany();
  }
}
