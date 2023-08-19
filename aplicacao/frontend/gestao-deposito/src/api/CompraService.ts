import {Collection, Pagination } from "@/api/adapters/BaseAdapters"
import {Compra} from "@/Types"

export const CompraService = new (class CompraService {
    compras: Array<Compra>;
    search: string = "";
    pagination: Pagination = {page:0,pageCount:0,pageSize:0,total:0};
  
  constructor() {
    this.compras = [
    ]
    this.pagination = {page:1,pageCount:0,pageSize:5,total:this.compras.length}
    this.search = ''
  }
  
  async all({ page, itemsPerPage, sortBy, search }: { page: number, itemsPerPage: number, sortBy: [{key:keyof(Compra), order:string}], search:string }): Promise<Collection<Compra> >  {
    return new Promise(resolve => {
      setTimeout(() => {
        this.pagination = { page, pageCount: 0, pageSize: itemsPerPage, total: this.compras.length }
        const start = (page - 1) * itemsPerPage
        const end = start + itemsPerPage
        const items = this.compras.slice().filter(item =>
          item.cliente.nome.toLowerCase().includes(search.toLowerCase())
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
  
  create(compras: Compra): Promise<Compra> {
    return new Promise(res => {
      setTimeout(() => {
        this.compras.push(compras);
        res(compras)
      }, 1e2);
    })
  }
  })()