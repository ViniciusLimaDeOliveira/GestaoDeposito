import {Collection, Pagination } from "@/api/adapters/BaseAdapters"
import {Cliente} from "@/Types"

export const ClienteService = new (class ClienteService {
    clientes: Array<Cliente>;
    search: string = "";
    pagination: Pagination = {page:0,pageCount:0,pageSize:0,total:0};
  
  constructor() {
    this.clientes = []
    this.pagination = {page:1,pageCount:0,pageSize:5,total:this.clientes.length}
    this.search = ''
  }
  
  async all({ page, itemsPerPage, sortBy, search }: { page: number, itemsPerPage: number, sortBy: [{key:keyof(Cliente), order:string}], search:string }): Promise<Collection<Cliente> >  {
    return new Promise(resolve => {
      setTimeout(() => {
        this.pagination = { page, pageCount: 0, pageSize: itemsPerPage, total: this.clientes.length }
        const start = (page - 1) * itemsPerPage
        const end = start + itemsPerPage
        const items = this.clientes.slice().filter(item =>
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
  
  create(clientes: Cliente): Promise<Cliente> {
    return new Promise(res => {
      setTimeout(() => {
        this.clientes.push(clientes);
        res(clientes)
      }, 1e2);
    })
  }
  })()