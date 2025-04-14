import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';
export declare class ZodValidationPipe implements PipeTransform {
    private readonly zodSchema;
    constructor(zodSchema: ZodSchema);
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
