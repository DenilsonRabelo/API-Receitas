import { receitaService } from './receita.service';
import { ReceitasDto } from './dto/create-receita.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
export declare class receitaController {
    private receitaService;
    constructor(receitaService: receitaService);
    FindReceitas(page: number, limit: number): Promise<Pagination<ReceitasDto>>;
    FindreceitaPorTipo(tipo: string): import(".prisma/client").Prisma.PrismaPromise<({
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
    FindIngredientesId(id: string): import(".prisma/client").Prisma.Prisma__IngredientesBaseClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        nomesIngrediente: import(".prisma/client").Prisma.JsonValue[];
        receita_id: number;
        created_at: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    FindReceitaDescricao(descricao: string, page: number, limit: number): Promise<Pagination<ReceitasDto, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    FindReceitaID(id: string): Promise<({
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
    CreateReceita(): Promise<{
        menssage: any;
    }>;
    DeleteReceita(id: number): Promise<{
        menssage: any;
    }>;
}
