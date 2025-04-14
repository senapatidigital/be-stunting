import { PrismaService } from 'src/common/services/prisma.service';
import { Balita, Prisma } from '@prisma/client';
export declare class BalitaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createBalita(data: Prisma.BalitaCreateInput): Promise<Balita>;
    findAll(): Promise<Balita[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        gender: import(".prisma/client").$Enums.Gender;
        birth: Date;
        birthWeight: number;
        birthHeight: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateBalita(id: string, data: Prisma.BalitaUpdateInput): Promise<Balita>;
    removeBalita(id: string): Promise<{
        id: string;
        name: string;
        gender: import(".prisma/client").$Enums.Gender;
        birth: Date;
        birthWeight: number;
        birthHeight: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
