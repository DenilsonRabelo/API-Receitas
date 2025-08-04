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
exports.usuarioService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../database/prisma.service");
let usuarioService = class usuarioService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        const data = Object.assign(Object.assign({}, createUserDto), { password: await bcrypt.hash(createUserDto.password, 10) });
        const createdUser = await this.prisma.usuario.create({ data });
        return Object.assign(Object.assign({}, createdUser), { password: undefined });
    }
    findByEmail(email) {
        return this.prisma.usuario.findUnique({ where: { email } });
    }
};
usuarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], usuarioService);
exports.usuarioService = usuarioService;
//# sourceMappingURL=usuario.service.js.map