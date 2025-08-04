import { OllamaIaService } from './ollama-ia.service';
import { ReceitaResponseDto } from './dto/receita-response.dto';
export declare class OllamaIaController {
    private ollamaIaService;
    constructor(ollamaIaService: OllamaIaService);
    createChat(): Promise<ReceitaResponseDto>;
    createChatByCategory(categoria: string, cozinha?: string): Promise<ReceitaResponseDto>;
}
