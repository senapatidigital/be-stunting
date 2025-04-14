"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodFilter = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const zod_1 = require("zod");
let ZodFilter = class ZodFilter {
    catch(exception, host) {
        const response = host.switchToHttp().getResponse();
        if (exception instanceof jwt_1.JsonWebTokenError) {
            return response.status(403).json({
                success: false,
                statusCode: 403,
                message: exception?.message,
                name: exception.name,
                code: exception?.code,
            });
        }
        if (exception instanceof common_1.HttpException) {
            const status = exception.getStatus();
            const exceptionResponse = exception.getResponse();
            const objRes = typeof exceptionResponse === 'string' ? {} : exceptionResponse;
            if (exception.cause instanceof zod_1.ZodError) {
                return response.status(422).json({
                    message: exception.message,
                    errors: exception.cause.errors,
                    name: exception.name,
                    statusCode: status,
                    success: false,
                    code: exception?.code,
                    ...objRes,
                });
            }
            return response.status(status).json({
                message: exception.message,
                statusCode: status,
                name: exception.name,
                success: false,
                code: exception?.code,
                ...objRes,
            });
        }
        return response.status(500).json({
            name: exception?.name ?? null,
            statusCode: 500,
            message: 'Internal server error.',
            success: false,
            code: exception?.code,
        });
    }
};
exports.ZodFilter = ZodFilter;
exports.ZodFilter = ZodFilter = __decorate([
    (0, common_1.Catch)()
], ZodFilter);
//# sourceMappingURL=zod.filter.js.map