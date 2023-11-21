import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { receitaService } from './receita.service';
import { ReceitasDto } from './dto/create-receita.dto'
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@Controller("receitas")
export class receitaController {
    constructor(private receitaService : receitaService){}

    @Get("todas")
    async FindReceitas() {
        return this.receitaService.getAll();
    }

    @Get('tipo/:tipo')
    FindreceitaPorTipo(@Param('tipo') tipo : String){
        return this.receitaService.getReceitasTipo(tipo)
    }

    @Get('ingredientes')
    FindIngredientes(){
        return this.receitaService.getReceitasIngredientes()
    }

    @Get('ingredientes/:id')
    FindIngredientesId(@Param('id') id : string){
        return this.receitaService.getIngredientesBasePorID(id)
    }

    @Get(':id')
    FindReceitaID(@Param('id') id : string){
        return this.receitaService.getRceitaId(id)
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async CreateReceita(@Body() data : [ReceitasDto]){
        return this.receitaService.postRceita(data);
    }
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async DeleteReceita(@Param('id') id : number){
        return this.receitaService.deleteReceita(id);
    }

}