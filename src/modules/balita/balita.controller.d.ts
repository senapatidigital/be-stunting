import { BalitaService } from './balita.service';
import { Prisma } from '@prisma/client';
export declare class BalitaController {
    private readonly balitaService;
    constructor(balitaService: BalitaService);
    createBalita(data: Prisma.BalitaCreateInput): Promise<{
        id: string;
        name: string;
        gender: import(".prisma/client").$Enums.Gender;
        birth: Date;
        birthWeight: number;
        birthHeight: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        gender: import(".prisma/client").$Enums.Gender;
        birth: Date;
        birthWeight: number;
        birthHeight: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
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
    update(id: string, data: Prisma.BalitaUpdateInput): Promise<{
        id: string;
        name: string;
        gender: import(".prisma/client").$Enums.Gender;
        birth: Date;
        birthWeight: number;
        birthHeight: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
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
