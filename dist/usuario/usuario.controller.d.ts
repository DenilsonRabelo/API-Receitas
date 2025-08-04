import { usuarioService } from './usuario.service';
import { CreateUserDto } from './dto/create-user-dto';
export declare class usuarioController {
    private usuarioService;
    constructor(usuarioService: usuarioService);
    criarUsuarioADM(user: CreateUserDto): Promise<CreateUserDto>;
}
