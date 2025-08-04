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
exports.receitaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const googleapis_1 = require("googleapis");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const ollama_ia_service_1 = require("../ollama-ia/ollama-ia.service");
let receitaService = class receitaService {
    constructor(prisma, ollamaIaService) {
        this.prisma = prisma;
        this.ollamaIaService = ollamaIaService;
    }
    getReceitasTipo(tipo) {
        if (tipo == 'doce' || tipo == 'salgado' || tipo == 'agridoce') {
            try {
                const receitas = this.prisma.receita.findMany({
                    where: {
                        tipo: tipo,
                    },
                    include: {
                        IngredientesBase: true,
                    },
                });
                return receitas;
            }
            catch (error) {
                throw new common_1.InternalServerErrorException(`Erro ao buscar receitas do tipo ${tipo}: ${error.message}`);
            }
        }
        else {
            throw new common_1.BadRequestException(`O tipo da receita deve ser doce, salgado ou agridoce`);
        }
    }
    async getReceitaDescricao(descricao, options) {
        try {
            const { page, limit } = options;
            const [receitas, total] = await Promise.all([
                this.prisma.receita.findMany({
                    where: {
                        receita: {
                            contains: descricao,
                            mode: 'insensitive',
                        },
                    },
                    include: {
                        IngredientesBase: true,
                    },
                    skip: (Number(page) - 1) * Number(limit),
                    take: Number(limit),
                }),
                this.prisma.receita.count({
                    where: {
                        receita: {
                            contains: descricao,
                            mode: 'insensitive',
                        },
                    },
                }),
            ]);
            const meta = {
                itemCount: receitas.length,
                totalItems: total,
                itemsPerPage: Number(limit),
                totalPages: Math.ceil(total / Number(limit)),
                currentPage: Number(page),
            };
            return new nestjs_typeorm_paginate_1.Pagination(receitas, meta);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Erro ao buscar receitas por descrição: ${error.message}`);
        }
    }
    async getReceitaId(id) {
        try {
            const receita = await this.prisma.receita.findUnique({
                where: { id: parseInt(id) },
                include: { IngredientesBase: true },
            });
            return receita;
        }
        catch (error) {
            return { menssage: error };
        }
    }
    async getAll(options) {
        const { page, limit } = options;
        try {
            const [receitas, total] = await Promise.all([
                this.prisma.receita.findMany({
                    include: {
                        IngredientesBase: true,
                    },
                    skip: (Number(page) - 1) * Number(limit),
                    take: Number(limit),
                }),
                this.prisma.receita.count(),
            ]);
            const meta = {
                itemCount: receitas.length,
                totalItems: total,
                itemsPerPage: Number(limit),
                totalPages: Math.ceil(total / Number(limit)),
                currentPage: Number(page),
            };
            return new nestjs_typeorm_paginate_1.Pagination(receitas, meta);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Erro ao buscar receitas: ${error.message}`);
        }
    }
    getIngredientesBasePorID(id) {
        try {
            const ingredientesBase = this.prisma.ingredientesBase.findUnique({
                where: { id: parseInt(id) },
            });
            return ingredientesBase;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Erro ao buscar ingredientes base: ${error.message}`);
        }
    }
    async postReceita() {
        try {
            const receitaGerada = await this.ollamaIaService.createChat();
            const { IngredientesBase, receita, ingredientes, modo_preparo, tipo } = receitaGerada;
            if (!(tipo == 'doce' || tipo == 'salgado' || tipo == 'agridoce')) {
                return { menssage: `${tipo} deve ser doce, salgado ou agridoce` };
            }
            const link_imagem = await this.getImagemReceita(receita);
            await this.prisma.receita.create({
                data: {
                    receita,
                    ingredientes,
                    modo_preparo,
                    link_imagem,
                    tipo,
                    IngredientesBase: {
                        create: IngredientesBase,
                    },
                },
            });
            return { menssage: 'receita criada' };
        }
        catch (error) {
            return { menssage: error };
        }
    }
    async deleteReceita(id) {
        try {
            await this.prisma.receita.delete({
                where: { id: parseInt(id) },
            });
            return { menssage: 'receita deletada' };
        }
        catch (error) {
            return { menssage: error };
        }
    }
    async getImagemReceita(receita) {
        const customsearch = new googleapis_1.GoogleApis().customsearch('v1');
        const response = await customsearch.cse.list({
            cx: process.env.ENGINE_ID,
            q: receita,
            auth: process.env.API_GOOGLE_SEARCH_KEY,
            searchType: 'image',
            num: 1,
        });
        const link = response.data.items[0].link;
        return link;
    }
};
receitaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ollama_ia_service_1.OllamaIaService])
], receitaService);
exports.receitaService = receitaService;
//# sourceMappingURL=receita.service.js.map