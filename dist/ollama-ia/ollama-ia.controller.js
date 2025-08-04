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
exports.OllamaIaController = void 0;
const ollama_ia_service_1 = require("./ollama-ia.service");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let OllamaIaController = class OllamaIaController {
    constructor(ollamaIaService) {
        this.ollamaIaService = ollamaIaService;
    }
    async createChat() {
        return this.ollamaIaService.createChat();
    }
    async createChatByCategory(categoria, cozinha) {
        return this.ollamaIaService.createChatByCategory(categoria, cozinha);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('chat'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OllamaIaController.prototype, "createChat", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('chat/categoria'),
    __param(0, (0, common_1.Query)('categoria')),
    __param(1, (0, common_1.Query)('cozinha')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], OllamaIaController.prototype, "createChatByCategory", null);
OllamaIaController = __decorate([
    (0, common_1.Controller)('ollama-ia'),
    __metadata("design:paramtypes", [ollama_ia_service_1.OllamaIaService])
], OllamaIaController);
exports.OllamaIaController = OllamaIaController;
//# sourceMappingURL=ollama-ia.controller.js.map