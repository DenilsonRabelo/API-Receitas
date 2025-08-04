import { ReceitaResponseDto } from './dto/receita-response.dto';
import { PrismaService } from '../database/prisma.service';
export declare class OllamaIaService {
    private prisma;
    constructor(prisma: PrismaService);
    createChat(): Promise<ReceitaResponseDto>;
    private generateRecipe;
    createChatByCategory(categoria: string, cozinha?: string): Promise<ReceitaResponseDto>;
    private generateRecipeByCategory;
}
