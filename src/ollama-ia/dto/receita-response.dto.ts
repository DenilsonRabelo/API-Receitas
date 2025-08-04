export interface ReceitaResponseDto {
  receita: string;
  ingredientes: string;
  modo_preparo: string;
  tipo: string;
  IngredientesBase: {
    nomesIngrediente: string[];
  };
}

export interface OllamaResponseDto {
  response?: string;
  message?: {
    role: string;
    content: string;
  };
  model?: string;
  created_at?: string;
  done?: boolean;
  done_reason?: string;
  error?: string;
}
