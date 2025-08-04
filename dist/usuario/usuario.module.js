"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioModule = void 0;
const prisma_service_1 = require("./../database/prisma.service");
const common_1 = require("@nestjs/common");
const usuario_controller_1 = require("./usuario.controller");
const usuario_service_1 = require("./usuario.service");
let usuarioModule = class usuarioModule {
};
usuarioModule = __decorate([
    (0, common_1.Module)({
        controllers: [usuario_controller_1.usuarioController],
        providers: [usuario_service_1.usuarioService, prisma_service_1.PrismaService],
        exports: [usuario_service_1.usuarioService],
    })
], usuarioModule);
exports.usuarioModule = usuarioModule;
//# sourceMappingURL=usuario.module.js.map