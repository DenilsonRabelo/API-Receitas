"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.receitaModule = void 0;
const receita_controller_1 = require("./receita.controller");
const common_1 = require("@nestjs/common");
const receita_service_1 = require("./receita.service");
const prisma_service_1 = require("../database/prisma.service");
const ollama_ia_module_1 = require("../ollama-ia/ollama-ia.module");
let receitaModule = class receitaModule {
};
receitaModule = __decorate([
    (0, common_1.Module)({
        imports: [ollama_ia_module_1.OllamaIaModule],
        controllers: [receita_controller_1.receitaController],
        providers: [receita_service_1.receitaService, prisma_service_1.PrismaService],
        exports: [receita_service_1.receitaService],
    })
], receitaModule);
exports.receitaModule = receitaModule;
//# sourceMappingURL=receita.module.js.map