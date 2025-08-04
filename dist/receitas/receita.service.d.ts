import { PrismaService } from '../database/prisma.service';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { ReceitasDto } from './dto/create-receita.dto';
import { OllamaIaService } from '../ollama-ia/ollama-ia.service';
export declare class receitaService {
    private prisma;
    private ollamaIaService;
    constructor(prisma: PrismaService, ollamaIaService: OllamaIaService);
    getReceitasTipo(tipo: any): import(".prisma/client").Prisma.PrismaPromise<({
        IngredientesBase: (import("@prisma/client/runtime").GetResult<{
            id: number;
            nomesIngrediente: import(".prisma/client").Prisma.JsonValue[];
            receita_id: number;
            created_at: Date;
        }, unknown, never> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        receita: string;
        ingredientes: string;
        modo_preparo: string;
        link_imagem: string;
        tipo: string;
        created_at: Date;
    }, unknown, never> & {})[]>;
    getReceitaDescricao(descricao: string, options: IPaginationOptions): Promise<Pagination<ReceitasDto>>;
    getReceitaId(id: string): Promise<({
        IngredientesBase: (import("@prisma/client/runtime").GetResult<{
            id: number;
            nomesIngrediente: import(".prisma/client").Prisma.JsonValue[];
            receita_id: number;
            created_at: Date;
        }, unknown, never> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        receita: string;
        ingredientes: string;
        modo_preparo: string;
        link_imagem: string;
        tipo: string;
        created_at: Date;
    }, unknown, never> & {}) | {
        menssage: any;
    }>;
    getAll(options: IPaginationOptions): Promise<Pagination<ReceitasDto>>;
    getIngredientesBasePorID(id: any): import(".prisma/client").Prisma.Prisma__IngredientesBaseClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        nomesIngrediente: import(".prisma/client").Prisma.JsonValue[];
        receita_id: number;
        created_at: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    postReceita(): Promise<{
        menssage: any;
    }>;
    deleteReceita(id: any): Promise<{
        menssage: any;
    }>;
    getImagemReceita(receita: any): Promise<string>;
}
