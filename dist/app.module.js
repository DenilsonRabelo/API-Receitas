"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const auth_module_1 = require("./auth/auth.module");
const receita_module_1 = require("./receitas/receita.module");
const prisma_service_1 = require("./database/prisma.service");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const usuario_module_1 = require("./usuario/usuario.module");
const throttler_1 = require("@nestjs/throttler");
const core_1 = require("@nestjs/core");
const ollama_ia_module_1 = require("./ollama-ia/ollama-ia.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [receita_module_1.receitaModule, auth_module_1.AuthModule, usuario_module_1.usuarioModule, throttler_1.ThrottlerModule.forRoot({
                ttl: 60,
                limit: 100
            }), ollama_ia_module_1.OllamaIaModule],
        controllers: [app_controller_1.AppController],
        providers: [prisma_service_1.PrismaService,
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map