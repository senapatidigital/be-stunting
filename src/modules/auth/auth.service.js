"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const create_auth_dto_1 = require("./dto/create-auth.dto");
const prisma_service_1 = require("../../common/services/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_service_1 = require("../../common/services/bcrypt.service");
let AuthService = class AuthService {
    constructor(prisma, jwtService, bcryptService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.bcryptService = bcryptService;
    }
    async register(registerDto) {
        const { fullName, username, role, email, password } = registerDto;
        await this.ensureUserDoesNotExist(username, email);
        const hashedPassword = await this.bcryptService.hashPassword(password);
        const user = await this.createUser(fullName, username, email, hashedPassword, role);
        const token = await this.generateToken(user.id, user.username, user.fullName, user.role);
        return { user, token };
    }
    async login(loginDto) {
        const { username, password } = loginDto;
        const user = await this.findUserByUsername(username);
        await this.validatePassword(password, user.password);
        const token = await this.generateToken(user.id, user.username, user.fullName, user.role);
        return { user, token };
    }
    async ensureUserDoesNotExist(username, email) {
        const userWithSameEmail = await this.prisma.users.count({
            where: {
                email,
            },
        });
        if (userWithSameEmail > 0)
            throw new common_1.BadRequestException('Email already exists');
        const userWithSameUsername = await this.prisma.users.count({
            where: {
                username,
            },
        });
        if (userWithSameUsername > 0)
            throw new common_1.BadRequestException('Username already exists');
    }
    async createUser(fullName, username, email, password, role = create_auth_dto_1.Role.USER) {
        return this.prisma.users.create({
            data: {
                fullName,
                username,
                role,
                email,
                password,
            },
            select: {
                id: true,
                username: true,
                fullName: true,
                role: true,
            },
        });
    }
    async findUserByUsername(username) {
        const user = this.prisma.users.findUnique({
            where: {
                username,
            },
            select: {
                id: true,
                fullName: true,
                username: true,
                email: true,
                role: true,
                password: true,
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        return user;
    }
    async validatePassword(password, hashedPassword) {
        const isMatch = await this.bcryptService.comparePassword(password, hashedPassword);
        if (!isMatch)
            throw new common_1.UnauthorizedException('Invalid credentials');
    }
    generateToken(id, username, fullName, role) {
        const payload = {
            id,
            username,
            fullName,
            role,
        };
        return this.jwtService.sign(payload);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        bcrypt_service_1.BcryptService])
], AuthService);
//# sourceMappingURL=auth.service.js.map