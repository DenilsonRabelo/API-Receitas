import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { GoogleApis } from 'googleapis';


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
    const { IngredientesBase, receita, ingredientes, modo_preparo, tipo } = receitas

    if (!(tipo == 'doce' || tipo == 'salgado' || tipo == 'agridoce')) {
      return { menssage: `${tipo} deve ser doce, salgado ou agridoce` }
    }

    try {
      const link_imagem = await this.getImagemReceita(receita)
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

  async getImagemReceita(receita) {
    const customsearch = new GoogleApis().customsearch('v1')
    const response = await customsearch.cse.list({
      cx: process.env.ENGINE_ID,
      q: receita,
      auth: process.env.API_GOOGLE_SEARCH_KEY,
      searchType: 'image',
      num: 1
    })
    const link = response.data.items[0].link
    return link
  }
}