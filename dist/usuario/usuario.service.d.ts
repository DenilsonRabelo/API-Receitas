import { Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user-dto';
import { PrismaService } from '../database/prisma.service';
export declare class usuarioService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto>;
    findByEmail(email: string): Prisma.Prisma__UsuarioClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
