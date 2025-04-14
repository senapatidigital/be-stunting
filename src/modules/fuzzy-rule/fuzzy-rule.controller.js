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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuzzyRuleController = void 0;
const common_1 = require("@nestjs/common");
const fuzzy_rule_service_1 = require("./fuzzy-rule.service");
const public_decorator_1 = require("../../common/decorator/public.decorator");
const client_1 = require("@prisma/client");
let FuzzyRuleController = class FuzzyRuleController {
    constructor(fuzzyRuleService) {
        this.fuzzyRuleService = fuzzyRuleService;
    }
    createFuzzyRule(data) {
        return this.fuzzyRuleService.createFuzzyRule(data);
    }
    findAll() {
        return this.fuzzyRuleService.findAll();
    }
    findOne(id) {
        return this.fuzzyRuleService.findOne(id);
    }
    updateFuzzyRule(id, data) {
        return this.fuzzyRuleService.updateFuzzyRule(id, data);
    }
    remove(id) {
        return this.fuzzyRuleService.removeFuzzyRule(id);
    }
};
exports.FuzzyRuleController = FuzzyRuleController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FuzzyRuleController.prototype, "createFuzzyRule", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FuzzyRuleController.prototype, "findAll", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FuzzyRuleController.prototype, "findOne", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Patch)(':id'),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FuzzyRuleController.prototype, "updateFuzzyRule", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FuzzyRuleController.prototype, "remove", null);
exports.FuzzyRuleController = FuzzyRuleController = __decorate([
    (0, common_1.Controller)('fuzzy-rule'),
    __metadata("design:paramtypes", [fuzzy_rule_service_1.FuzzyRuleService])
], FuzzyRuleController);
//# sourceMappingURL=fuzzy-rule.controller.js.map