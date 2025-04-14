import { z } from 'zod';
export declare enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}
export declare class RegisterDto {
    fullName: string;
    username: string;
    role: Role;
    email: string;
    password: string;
}
export declare class LoginDto {
    username: string;
    password: string;
}
export declare const registerSchema: z.ZodObject<{
    fullName: z.ZodString;
    email: z.ZodString;
    username: z.ZodString;
    password: z.ZodString;
    role: z.ZodOptional<z.ZodDefault<z.ZodEnum<[Role.USER, Role.ADMIN]>>>;
}, "strip", z.ZodTypeAny, {
    fullName?: string;
    email?: string;
    username?: string;
    password?: string;
    role?: Role;
}, {
    fullName?: string;
    email?: string;
    username?: string;
    password?: string;
    role?: Role;
}>;
export declare const loginSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username?: string;
    password?: string;
}, {
    username?: string;
    password?: string;
}>;
