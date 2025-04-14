import { VariablesService } from './variables.service';
export declare class VariablesController {
    private readonly variablesService;
    constructor(variablesService: VariablesService);
    findAll(): Promise<{
        id: string;
        age: import(".prisma/client").$Enums.Age;
        weight: import(".prisma/client").$Enums.Result;
        height: import(".prisma/client").$Enums.HeightResult;
        zsBBU: import(".prisma/client").$Enums.Result;
        zsTBU: import(".prisma/client").$Enums.Result;
        output: import(".prisma/client").$Enums.OutputType;
    }[]>;
}
