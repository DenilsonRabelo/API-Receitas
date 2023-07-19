import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user-dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class usuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const data: Prisma.UsuarioCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const createdUser = await this.prisma.usuario.create({ data });

    return {
      ...createdUser,
      password: undefined,
    };
  }

  findByEmail(email : string) {
    return this.prisma.usuario.findUnique({ where: { email } });
  }
}