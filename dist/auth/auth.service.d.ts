import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../usuario/dto/create-user-dto';
import { usuarioService } from '../usuario/usuario.service';
import { UserToken } from './model/UserToken';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: usuarioService);
    login(user: CreateUserDto): Promise<UserToken>;
    validateUser(email: string, password: string): Promise<CreateUserDto>;
}
