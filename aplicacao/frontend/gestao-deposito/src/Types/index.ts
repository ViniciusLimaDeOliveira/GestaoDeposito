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

export interface VendaProduto{
  id: number,
  compra:Compra,
  produto:Produto,
  quantidade: number,
  valor: number,
}

export interface Compra{
  id: number,
  cliente: Cliente,
  carrinho:VendaProduto[],
  valorTotal: number,
  notas: string,
  dataCompra: string,
}

export interface Cliente {
  id: number,
  nome: string,
  contatos: Telefone[],
  endereco: string,
  notas: string,
  historico: Compra[],
}

export interface Telefone{
  id: number,
  cliente: Cliente,
  contato: string,
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