import { receitaController } from './receita.controller';
import { Module } from '@nestjs/common';
import { receitaService } from './receita.service';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [receitaController],
  providers: [receitaService, PrismaService],
  exports: [receitaService],
})
export class receitaModule {}
