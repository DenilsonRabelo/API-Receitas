import { usuarioService } from './usuario.service';
import { CreateUserDto } from './dto/create-user-dto';

import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller("usuario")
export class usuarioController {
    constructor (private usuarioService : usuarioService){}

    
    @Post()
    criarUsuarioADM(@Body() user : CreateUserDto){
        return this.usuarioService.create(user)
    }
}