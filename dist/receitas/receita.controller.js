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
exports.receitaController = void 0;
const common_1 = require("@nestjs/common");
const receita_service_1 = require("./receita.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let receitaController = class receitaController {
    constructor(receitaService) {
        this.receitaService = receitaService;
    }
    async FindReceitas(page, limit) {
        limit = limit > 100 ? 100 : limit;
        page = page < 1 ? 1 : page;
        if (!page || !limit) {
            page = 1;
            limit = 10;
        }
        return this.receitaService.getAll({ page, limit });
    }
    FindreceitaPorTipo(tipo) {
        return this.receitaService.getReceitasTipo(tipo);
    }
    FindIngredientesId(id) {
        return this.receitaService.getIngredientesBasePorID(id);
    }
    FindReceitaDescricao(descricao, page, limit) {
        limit = limit > 100 ? 100 : limit;
        page = page < 1 ? 1 : page;
        if (!page || !limit) {
            page = 1;
            limit = 10;
        }
        console.log(`Buscando receitas com descrição: ${descricao}`);
        return this.receitaService.getReceitaDescricao(descricao, { page, limit });
    }
    FindReceitaID(id) {
        return this.receitaService.getReceitaId(id);
    }
    async CreateReceita() {
        return this.receitaService.postReceita();
    }
    async DeleteReceita(id) {
        return this.receitaService.deleteReceita(id);
    }
};
__decorate([
    (0, common_1.Get)('todas'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], receitaController.prototype, "FindReceitas", null);
__decorate([
    (0, common_1.Get)('tipo/:tipo'),
    __param(0, (0, common_1.Param)('tipo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], receitaController.prototype, "FindreceitaPorTipo", null);
__decorate([
    (0, common_1.Get)('ingredientes/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], receitaController.prototype, "FindIngredientesId", null);
__decorate([
    (0, common_1.Get)('descricao'),
    __param(0, (0, common_1.Query)('descricao')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", void 0)
], receitaController.prototype, "FindReceitaDescricao", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], receitaController.prototype, "FindReceitaID", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], receitaController.prototype, "CreateReceita", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], receitaController.prototype, "DeleteReceita", null);
receitaController = __decorate([
    (0, common_1.Controller)('receitas'),
    __metadata("design:paramtypes", [receita_service_1.receitaService])
], receitaController);
exports.receitaController = receitaController;
//# sourceMappingURL=receita.controller.js.map