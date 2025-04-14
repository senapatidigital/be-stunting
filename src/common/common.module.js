"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("./services/prisma.service");
const bcrypt_service_1 = require("./services/bcrypt.service");
const zod_filter_1 = require("./filter/zod/zod.filter");
const core_1 = require("@nestjs/core");
const jwt_guard_1 = require("./guard/jwt/jwt.guard");
const roles_guard_1 = require("./guard/roles/roles.guard");
let CommonModule = class CommonModule {
};
exports.CommonModule = CommonModule;
exports.CommonModule = CommonModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '1d' },
            }),
        ],
        providers: [
            prisma_service_1.PrismaService,
            bcrypt_service_1.BcryptService,
            {
                provide: core_1.APP_FILTER,
                useClass: zod_filter_1.ZodFilter,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_guard_1.JwtGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
        ],
        exports: [prisma_service_1.PrismaService, jwt_1.JwtModule, bcrypt_service_1.BcryptService],
    })
], CommonModule);
//# sourceMappingURL=common.module.js.map