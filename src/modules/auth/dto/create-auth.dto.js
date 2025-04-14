"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = exports.LoginDto = exports.RegisterDto = exports.Role = void 0;
const zod_1 = require("zod");
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
})(Role || (exports.Role = Role = {}));
class RegisterDto {
}
exports.RegisterDto = RegisterDto;
class LoginDto {
}
exports.LoginDto = LoginDto;
const RoleEnum = zod_1.z.enum([Role.USER, Role.ADMIN]);
exports.registerSchema = zod_1.z.object({
    fullName: zod_1.z.string().min(1, 'Name cannot be empty'),
    email: zod_1.z.string().email({ message: 'Invalid email' }),
    username: zod_1.z
        .string()
        .min(1, 'Username cannot be empty')
        .max(20, 'Username cannot be longer than 20 characters'),
    password: zod_1.z
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .max(30, 'Password cannot be longer than 30 characters'),
    role: RoleEnum.default(Role.USER).optional(),
});
exports.loginSchema = zod_1.z.object({
    username: zod_1.z
        .string()
        .min(1, 'Username cannot be empty')
        .max(20, 'Username cannot be longer than 20 characters'),
    password: zod_1.z
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .max(30, 'Password cannot be longer than 30 characters'),
});
//# sourceMappingURL=create-auth.dto.js.map