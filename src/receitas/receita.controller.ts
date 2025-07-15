import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { receitaService } from './receita.service';
import { ReceitasDto } from './dto/create-receita.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Pagination } from 'nestjs-typeorm-paginate';

@Controller('receitas')
export class receitaController {
  constructor(private receitaService: receitaService) {}

  @Get('todas')
  async FindReceitas(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<Pagination<ReceitasDto>> {
    limit = limit > 100 ? 100 : limit;
    page = page < 1 ? 1 : page;
    if (!page || !limit) {
      page = 1;
      limit = 10;
    }
    return this.receitaService.getAll({ page, limit });
  }

  @Get('tipo/:tipo')
  FindreceitaPorTipo(@Param('tipo') tipo: string) {
    return this.receitaService.getReceitasTipo(tipo);
  }

  @Get('ingredientes/:id')
  FindIngredientesId(@Param('id') id: string) {
    return this.receitaService.getIngredientesBasePorID(id);
  }

  @Get(':id')
  FindReceitaID(@Param('id') id: string) {
    return this.receitaService.getReceitaId(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async CreateReceita(@Body() data: ReceitasDto) {
    return this.receitaService.postReceita(data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async DeleteReceita(@Param('id') id: number) {
    return this.receitaService.deleteReceita(id);
  }
}
