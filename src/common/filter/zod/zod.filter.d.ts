import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
export declare class ZodFilter<T> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost): Response<any, Record<string, any>>;
}
