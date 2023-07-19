import { PrismaService } from './../database/prisma.service';
import { Module } from '@nestjs/common';
import { usuarioController } from './usuario.controller';
import { usuarioService } from './usuario.service';


@Module({
  controllers: [usuarioController],
  providers: [usuarioService, PrismaService],
  exports: [usuarioService],
})
export class usuarioModule {}