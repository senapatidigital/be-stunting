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
exports.FuzzyDetectionController = void 0;
const common_1 = require("@nestjs/common");
const fuzzy_detection_service_1 = require("./fuzzy-detection.service");
const public_decorator_1 = require("../../common/decorator/public.decorator");
const create_fuzzy_detection_dto_1 = require("./dto/create-fuzzy-detection.dto");
let FuzzyDetectionController = class FuzzyDetectionController {
    constructor(fuzzyDetectionService) {
        this.fuzzyDetectionService = fuzzyDetectionService;
    }
    createMeasurement(balitaId, fuzzyDetect) {
        return this.fuzzyDetectionService.detectStunting({
            balitaId,
            ...fuzzyDetect,
        });
    }
    findAll(page = 1, limit = 5) {
        return this.fuzzyDetectionService.findAll(page, limit);
    }
    findOne(balitaId) {
        return this.fuzzyDetectionService.findOne(balitaId);
    }
    remove(id) {
        return this.fuzzyDetectionService.remove(+id);
    }
};
exports.FuzzyDetectionController = FuzzyDetectionController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(':balitaId'),
    __param(0, (0, common_1.Param)('balitaId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_fuzzy_detection_dto_1.CreateFuzzyDetectionDto]),
    __metadata("design:returntype", void 0)
], FuzzyDetectionController.prototype, "createMeasurement", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], FuzzyDetectionController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':balitaId'),
    __param(0, (0, common_1.Param)('balitaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FuzzyDetectionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FuzzyDetectionController.prototype, "remove", null);
exports.FuzzyDetectionController = FuzzyDetectionController = __decorate([
    (0, common_1.Controller)('fuzzy-detection'),
    __metadata("design:paramtypes", [fuzzy_detection_service_1.FuzzyDetectionService])
], FuzzyDetectionController);
//# sourceMappingURL=fuzzy-detection.controller.js.map