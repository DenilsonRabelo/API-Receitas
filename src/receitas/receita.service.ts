import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';


@Injectable()
export class receitaService {
    constructor(private prisma: PrismaService) { }

    getReceitasTipo(tipo) {
        if (tipo == 'doce' || tipo == 'salgado' || tipo == 'agridoce') {
            try {
                const receitas = this.prisma.receita.findMany({
                    where: {
                        tipo: tipo
                    },
                    include: {
                        IngredientesBase: true
                    }
                })
                return receitas
            } catch (error) {
                return { menssage: error }
            }
        } else {
            return { menssage: `${tipo} deve ser doce, salgado ou agridoce` }
        }
    }

    getRceitaId(id) {
        try {
            const receita = this.prisma.receita.findUnique({
                where: { id: id },
                include: { IngredientesBase: true }
            })
            return receita
        } catch (error) {
            return { menssage: error }
        }
    }

    getAll() {
        try {
            const receitas = this.prisma.receita.findMany({
                include: {
                    IngredientesBase: true
                }
            });
            return receitas
        } catch (error) {
            return { menssage: error }
        }
    }

    async postRceita(receitas) {
        const { IngredientesBase, receita, ingredientes, modo_preparo, link_imagem, tipo } = receitas

        if (!(tipo == 'doce' || tipo == 'salgado' || tipo == 'agridoce')) {
            return { menssage: `${tipo} deve ser doce, salgado ou agridoce` }
        }

        try {
            await this.prisma.receita.create({
                data: {
                    receita,
                    ingredientes,
                    modo_preparo,
                    link_imagem,
                    tipo,
                    IngredientesBase: {
                        create: IngredientesBase
                    }
                }

            })
            return { menssage: "receita criada" }
        } catch (error) {
            return { menssage: error }
        }
    }
}