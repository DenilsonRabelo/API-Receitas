import { Injectable } from '@nestjs/common';
import {
  ReceitaResponseDto,
  OllamaResponseDto,
} from './dto/receita-response.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class OllamaIaService {
  constructor(private prisma: PrismaService) {}

  async createChat(): Promise<ReceitaResponseDto> {
    const maxAttempts = 5;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      const receita = await this.generateRecipe(attempt);

      const existingRecipe = await this.prisma.receita.findFirst({
        where: {
          receita: {
            equals: receita.receita,
            mode: 'insensitive',
          },
        },
      });

      if (!existingRecipe) {
        return receita;
      }

      console.log(
        `Tentativa ${attempt}: Receita "${receita.receita}" já existe, tentando novamente...`,
      );
    }

    console.warn(
      'Não foi possível gerar receita única após',
      maxAttempts,
      'tentativas',
    );
    return await this.generateRecipe(maxAttempts + 1);
  }

  private async generateRecipe(
    attemptNumber: number,
  ): Promise<ReceitaResponseDto> {
    const dynamicSeed = Math.floor(Date.now() / 1000) + attemptNumber;

    const response = await fetch(`${process.env.OLLAMA_API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3.1:latest',
        messages: [
          {
            role: 'system',
            content:
              'Você é um chef de cozinha ESTADUNIDENSE que sabe inúmeras receitas e as retorna em formato JSON exatamente na estrutura solicitada.',
          },
          {
            role: 'user',
            content: `Gere uma receita aleatória. Explore pratos, ingredientes ou técnicas. Retorne APENAS um JSON válido sem comentários, explicações ou texto adicional. O JSON deve ter exatamente esta estrutura:
          {
            "receita": "Nome da receita",
            "ingredientes": "Lista completa dos ingredientes separados por vírgula",
            "modo_preparo": "Instruções detalhadas de preparo passo a passo",
            "tipo": "so pode ser doce, salgado ou agridoce",
            "IngredientesBase": {
              "nomesIngrediente": ["ingrediente1", "ingrediente2", "ingrediente3"]
            }
          }
            Importante: Retorne SOMENTE o JSON, sem texto antes ou depois. Seja criativo`,
          },
        ],
        format: 'json',
        options: {
          seed: dynamicSeed,
          temperature: 0.3 + attemptNumber * 0.1,
        },
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create chat');
    }

    const data: OllamaResponseDto = await response.json();

    if (data.error) {
      throw new Error(`Ollama API error: ${data.error}`);
    }

    if (data.done_reason === 'load') {
      throw new Error('Ollama model failed to load or generate content');
    }

    let responseContent: string;
    if (data.response) {
      responseContent = data.response;
    } else if (data.message?.content) {
      responseContent = data.message.content;
    } else {
      throw new Error('Ollama API returned unexpected response structure');
    }

    if (!responseContent || responseContent.trim() === '') {
      throw new Error(
        'Ollama API returned empty content. Model may not be loaded or accessible.',
      );
    }

    try {
      const receitaJson = JSON.parse(responseContent) as ReceitaResponseDto;
      return receitaJson;
    } catch (parseError) {
      throw new Error(`Failed to parse recipe JSON: ${parseError.message}`);
    }
  }

  async createChatByCategory(
    categoria: string,
    cozinha?: string,
  ): Promise<ReceitaResponseDto> {
    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      const receita = await this.generateRecipeByCategory(
        categoria,
        attempt,
        cozinha,
      );

      const existingRecipe = await this.prisma.receita.findFirst({
        where: {
          receita: {
            equals: receita.receita,
            mode: 'insensitive',
          },
        },
      });

      if (!existingRecipe) {
        return receita;
      }
    }

    return await this.generateRecipeByCategory(
      categoria,
      maxAttempts + 1,
      cozinha,
    );
  }

  private async generateRecipeByCategory(
    categoria: string,
    attemptNumber: number,
    cozinha?: string,
  ): Promise<ReceitaResponseDto> {
    const dynamicSeed = Math.floor(Date.now() / 1000) + attemptNumber;
    const cozinhaText = cozinha ? ` da culinária ${cozinha}` : '';

    const response = await fetch(`${process.env.OLLAMA_API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3.1:latest',
        messages: [
          {
            role: 'system',
            content:
              'Você é um chef especialista em diferentes culinárias do mundo que cria receitas únicas e criativas.',
          },
          {
            role: 'user',
            content: `Crie uma receita ${categoria}${cozinhaText} que seja ÚNICA e CRIATIVA. Evite receitas muito comuns. Retorne APENAS um JSON válido:
          {
            "receita": "Nome da receita",
            "ingredientes": "Lista completa dos ingredientes separados por vírgula",
            "modo_preparo": "Instruções detalhadas de preparo passo a passo",
            "tipo": "${categoria}",
            "IngredientesBase": {
              "nomesIngrediente": ["ingrediente1", "ingrediente2", "ingrediente3"]
            }
          }`,
          },
        ],
        format: 'json',
        options: {
          seed: dynamicSeed,
          temperature: 0.4 + attemptNumber * 0.1,
        },
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create chat');
    }

    const data: OllamaResponseDto = await response.json();

    if (data.error) {
      throw new Error(`Ollama API error: ${data.error}`);
    }

    if (data.done_reason === 'load') {
      throw new Error('Ollama model failed to load or generate content');
    }

    let responseContent: string;
    if (data.response) {
      responseContent = data.response;
    } else if (data.message?.content) {
      responseContent = data.message.content;
    } else {
      throw new Error('Ollama API returned unexpected response structure');
    }

    if (!responseContent || responseContent.trim() === '') {
      throw new Error(
        'Ollama API returned empty content. Model may not be loaded or accessible.',
      );
    }

    try {
      const receitaJson = JSON.parse(responseContent) as ReceitaResponseDto;
      return receitaJson;
    } catch (parseError) {
      throw new Error(`Failed to parse recipe JSON: ${parseError.message}`);
    }
  }
}
