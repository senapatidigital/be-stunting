import { PrismaService } from 'src/common/services/prisma.service';
import { CreateFuzzyDetectionDto } from './dto/create-fuzzy-detection.dto';
export declare class FuzzyDetectionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    detectStunting(fuzzyDetection: CreateFuzzyDetectionDto): Promise<{
        id: string;
        balitaId: string | null;
        date: Date;
        currentWeight: number;
        currentHeight: number;
        currentAge: number;
        outputFuzzy: import(".prisma/client").$Enums.OutputType;
        fuzzyScore: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    private fuzzifyInput;
    private calculateMembership;
    private applyFuzzyTsukamoto;
    private getOutputScore;
    private calculateAgeInMonths;
    findAll(page?: number, limit?: number): Promise<{
        measurement: ({
            balita: {
                id: string;
                name: string;
                gender: import(".prisma/client").$Enums.Gender;
                birth: Date;
                birthWeight: number;
                birthHeight: number;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            balitaId: string | null;
            date: Date;
            currentWeight: number;
            currentHeight: number;
            currentAge: number;
            outputFuzzy: import(".prisma/client").$Enums.OutputType;
            fuzzyScore: number;
            createdAt: Date;
            updatedAt: Date;
        })[];
        page: number;
        totalPages: number;
    }>;
    findOne(balitaId: string): Promise<{
        balita: {
            name: string;
        };
        date: Date;
        currentAge: number;
        outputFuzzy: import(".prisma/client").$Enums.OutputType;
        fuzzyScore: number;
    }>;
    remove(id: number): string;
}
