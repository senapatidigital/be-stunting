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
exports.FuzzyRuleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/services/prisma.service");
let FuzzyRuleService = class FuzzyRuleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createFuzzyRule(data) {
        return await this.prisma.fuzzyRule.create({
            data,
        });
    }
    async findAll() {
        return await this.prisma.fuzzyRule.findMany();
    }
    async findOne(id) {
        const fuzzyRule = await this.prisma.fuzzyRule.findUnique({
            where: { id },
        });
        if (!fuzzyRule)
            throw new common_1.NotFoundException(`Fuzzy Rule with ${id} not found`);
        return fuzzyRule;
    }
    async updateFuzzyRule(id, data) {
        const fuzzyRule = await this.prisma.fuzzyRule.findUnique({
            where: { id },
        });
        if (!fuzzyRule)
            throw new common_1.NotFoundException(`Fuzzy Rule with ${id} not found`);
        return await this.prisma.fuzzyRule.update({
            where: { id },
            data,
        });
    }
    async removeFuzzyRule(id) {
        const fuzzyRule = await this.prisma.fuzzyRule.findUnique({
            where: { id },
        });
        if (!fuzzyRule) {
            throw new common_1.NotFoundException(`Fuzzy rule with ID ${id} not found`);
        }
        return this.prisma.fuzzyRule.delete({
            where: { id },
        });
    }
};
exports.FuzzyRuleService = FuzzyRuleService;
exports.FuzzyRuleService = FuzzyRuleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FuzzyRuleService);
//# sourceMappingURL=fuzzy-rule.service.js.map