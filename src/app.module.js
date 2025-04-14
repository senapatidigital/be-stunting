"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const common_module_1 = require("./common/common.module");
const auth_module_1 = require("./modules/auth/auth.module");
const chat_gateway_1 = require("./modules/chat/chat.gateway");
const chat_module_1 = require("./modules/chat/chat.module");
const users_module_1 = require("./modules/users/users.module");
const fuzzy_detection_module_1 = require("./modules/fuzzy-detection/fuzzy-detection.module");
const fuzzy_rule_module_1 = require("./modules/fuzzy-rule/fuzzy-rule.module");
const balita_module_1 = require("./modules/balita/balita.module");
const variables_module_1 = require("./modules/variables/variables.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_module_1.CommonModule,
            auth_module_1.AuthModule,
            chat_module_1.ChatModule,
            users_module_1.UsersModule,
            fuzzy_detection_module_1.FuzzyDetectionModule,
            fuzzy_rule_module_1.FuzzyRuleModule,
            balita_module_1.BalitaModule,
            variables_module_1.VariablesModule,
        ],
        providers: [chat_gateway_1.ChatGateway],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map