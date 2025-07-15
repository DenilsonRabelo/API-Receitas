import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { GoogleApis } from 'googleapis';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { ReceitasDto } from './dto/create-receita.dto';

@Injectable()
export class receitaService {
  constructor(private prisma: PrismaService) {}

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
      } catch (error) {
        throw new InternalServerErrorException(
          `Erro ao buscar receitas do tipo ${tipo}: ${error.message}`,
        );
      }
    } else {
      throw new BadRequestException(
        `O tipo da receita deve ser doce, salgado ou agridoce`,
      );
    }
  }

  async getReceitaId(id: string) {
    try {
      const receita = await this.prisma.receita.findUnique({
        where: { id: parseInt(id) },
        include: { IngredientesBase: true },
      });
      return receita;
    } catch (error) {
      return { menssage: error };
    }
  }

  async getAll(options: IPaginationOptions): Promise<Pagination<ReceitasDto>> {
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
      return new Pagination<ReceitasDto>(receitas, meta);
    } catch (error) {
      throw new InternalServerErrorException(
        `Erro ao buscar receitas: ${error.message}`,
      );
    }
  }

  getIngredientesBasePorID(id) {
    try {
      const ingredientesBase = this.prisma.ingredientesBase.findUnique({
        where: { id: parseInt(id) },
      });
      return ingredientesBase;
    } catch (error) {
      throw new InternalServerErrorException(
        `Erro ao buscar ingredientes base: ${error.message}`,
      );
    }
  }

  async postReceita(receitas) {
    const { IngredientesBase, receita, ingredientes, modo_preparo, tipo } =
      receitas;

    if (!(tipo == 'doce' || tipo == 'salgado' || tipo == 'agridoce')) {
      return { menssage: `${tipo} deve ser doce, salgado ou agridoce` };
    }

    try {
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
    } catch (error) {
      return { menssage: error };
    }
  }

  async deleteReceita(id) {
    try {
      await this.prisma.receita.delete({
        where: { id: parseInt(id) },
      });
      return { menssage: 'receita deletada' };
    } catch (error) {
      return { menssage: error };
    }
  }

  async getImagemReceita(receita) {
    const customsearch = new GoogleApis().customsearch('v1');
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
}
