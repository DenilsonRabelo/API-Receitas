"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OllamaIaModule = void 0;
const common_1 = require("@nestjs/common");
const ollama_ia_controller_1 = require("./ollama-ia.controller");
const ollama_ia_service_1 = require("./ollama-ia.service");
const prisma_service_1 = require("../database/prisma.service");
let OllamaIaModule = class OllamaIaModule {
};
OllamaIaModule = __decorate([
    (0, common_1.Module)({
        controllers: [ollama_ia_controller_1.OllamaIaController],
        providers: [ollama_ia_service_1.OllamaIaService, prisma_service_1.PrismaService],
        exports: [ollama_ia_service_1.OllamaIaService]
    })
], OllamaIaModule);
exports.OllamaIaModule = OllamaIaModule;
//# sourceMappingURL=ollama-ia.module.js.map