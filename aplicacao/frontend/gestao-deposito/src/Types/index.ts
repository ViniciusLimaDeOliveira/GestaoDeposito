export interface Produto {
  id: number;
  nome: string;
  quantidade: number;
  precoDeCompra: number;
  porcentagenVenda: number;
  precoDeVenda: number;
  precoPromocional: number;
}

export interface InfoDataTableServer {
  page: number;
  itemsPerPage: number;
  sortBy: [{ key: string; order: string }];
}

export interface ApplicationError {
  name: string;
  message: string;
  details?: string[];
}
