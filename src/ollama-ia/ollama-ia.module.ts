import { Module } from '@nestjs/common';
import { OllamaIaController } from './ollama-ia.controller';
import { OllamaIaService } from './ollama-ia.service';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [OllamaIaController],
  providers: [OllamaIaService, PrismaService],
  exports: [OllamaIaService]
})
export class OllamaIaModule {}
