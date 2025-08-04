import { OllamaIaService } from './ollama-ia.service';
import { Post, Controller, Query, UseGuards } from '@nestjs/common';
import { ReceitaResponseDto } from './dto/receita-response.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('ollama-ia')
export class OllamaIaController {
  constructor(private ollamaIaService: OllamaIaService) {}

  @UseGuards(JwtAuthGuard)
  @Post('chat')
  async createChat(): Promise<ReceitaResponseDto> {
    return this.ollamaIaService.createChat();
  }

  @UseGuards(JwtAuthGuard)
  @Post('chat/categoria')
  async createChatByCategory(
    @Query('categoria') categoria: string,
    @Query('cozinha') cozinha?: string,
  ): Promise<ReceitaResponseDto> {
    return this.ollamaIaService.createChatByCategory(categoria, cozinha);
  }
}
