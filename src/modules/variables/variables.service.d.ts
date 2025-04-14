import { PrismaService } from 'src/common/services/prisma.service';
import { VariableFuzzy } from '@prisma/client';
export declare class VariablesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<VariableFuzzy[]>;
}
