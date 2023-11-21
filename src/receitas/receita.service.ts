import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';


@Injectable()
export class receitaService {
    constructor(private prisma: PrismaService) { }

    getReceitasTipo(tipo) {
        console.log(tipo)
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

    getRceitaId(id: string) {
        try {
            const receita = this.prisma.receita.findUnique({
                where: { id: parseInt(id) },
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


    getReceitasIngredientes() {
        try {
            const ingredientesBase = this.prisma.ingredientesBase.findMany()
            return ingredientesBase
        } catch (error) {
            return { menssage: error }
        }
    }

    getIngredientesBasePorID(id) {
        try {
            const ingredientesBase = this.prisma.ingredientesBase.findUnique({
                where: { id: parseInt(id) }
            })
            return ingredientesBase
        } catch (error) {
            return { menssage: error }
        }
    }

    async postRceita(receitas) {
        receitas.forEach(element => {
            const { IngredientesBase, receita, ingredientes, modo_preparo, link_imagem, tipo } = element
            
            if (!(tipo === "doce" || tipo === "salgado" || tipo === "agridoce")) {
                return { menssage: `${tipo} deve ser doce, salgado ou agridoce` }
            }

            try {
                this.prisma.receita.create({
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
            } catch (error) {
                return { menssage: error }
            }
        });
        return { menssage: "receitas criadas" }
    }

    async deleteReceita(id) {
        try {
            await this.prisma.receita.delete({
                where: { id: parseInt(id) }
            })
            return { menssage: "receita deletada" }
        } catch (error) {
            return { menssage: error }
        }
    }
}