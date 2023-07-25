import {Collection, Pagination } from "@/api/adapters/BaseAdapters"
import {Produto} from "@/Types"

export const ProdutoService = new (class ProdutoService {
    produtos: Array<Produto>;
    search: string = "";
    pagination: Pagination = {page:0,pageCount:0,pageSize:0,total:0};
  
  constructor() {
    this.produtos = [
    ]
    this.pagination = {page:1,pageCount:0,pageSize:5,total:this.produtos.length}
    this.search = ''
  }
  
  async all({ page, itemsPerPage, sortBy, search }: { page: number, itemsPerPage: number, sortBy: [{key:keyof(produtos), order:string}], search:string }): Promise<Collection<produtos> >  {
    return new Promise(resolve => {
      setTimeout(() => {
        this.pagination = { page, pageCount: 0, pageSize: itemsPerPage, total: this.produtos.length }
        const start = (page - 1) * itemsPerPage
        const end = start + itemsPerPage
        const items = this.produtos.slice().filter(item =>
          item.nome.toLowerCase().includes(search.toLowerCase())
        )
        if (sortBy.length) {
          const sortKey = sortBy[0].key
          const sortOrder = sortBy[0].order
          items.sort((a, b) => {
            const aValue = String(a[sortKey])
            const bValue = String(b[sortKey])
            return sortOrder === 'desc' ?  bValue.localeCompare(aValue): aValue.localeCompare(bValue)
          })
        }
        const paginated = items.slice(start, end)
        resolve({ items: paginated, pagination:this.pagination })
      }, 500)
    })
  }
  
  async allNamesProdutos(){
    return this.produtos.map(produtos => {
          return {
            nome: produtos.nome
          }
        })
  }
  
  create(produtos: Produto): Promise<Produto> {
    return new Promise(res => {
      setTimeout(() => {
        this.produtos.push(produtos);
        res(produtos)
      }, 1e2);
    })
  }
  })()