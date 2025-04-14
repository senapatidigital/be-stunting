import { FuzzyRuleService } from './fuzzy-rule.service';
import { Prisma } from '@prisma/client';
export declare class FuzzyRuleController {
    private readonly fuzzyRuleService;
    constructor(fuzzyRuleService: FuzzyRuleService);
    createFuzzyRule(data: Prisma.FuzzyRuleCreateInput): Promise<{
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
    findAll(): Promise<{
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
    }[]>;
    findOne(id: string): Promise<{
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
    updateFuzzyRule(id: string, data: Prisma.FuzzyRuleUpdateInput): Promise<{
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
    remove(id: string): Promise<{
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
