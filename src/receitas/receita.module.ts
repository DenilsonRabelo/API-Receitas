import { receitaController } from './receita.controller';
import { Module } from '@nestjs/common';
import { receitaService } from './receita.service';
import { PrismaService } from '../database/prisma.service';
import { OllamaIaModule } from '../ollama-ia/ollama-ia.module';

@Module({
  imports: [OllamaIaModule],
  controllers: [receitaController],
  providers: [receitaService, PrismaService],
  exports: [receitaService],
})
export class receitaModule {}
