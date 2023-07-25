export interface Produto {
  id: number;
  nome: string;
  descricao: string;
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

export interface Notificacao {
  mensagem: string
  tipoMensagem: string
  visibilidade: boolean
}