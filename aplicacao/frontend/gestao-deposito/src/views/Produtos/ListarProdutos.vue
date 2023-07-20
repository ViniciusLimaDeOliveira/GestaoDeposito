<template>
     <PaginaPadrao titulo="Produtos">
        <template v-slot:conteudo>
          
          <v-data-table-server :search="state.search" :headers="constant.cabecalhoProdutos" :items="state.listaProdutos"
        :items-per-page="state.pagination.pageSize" :items-length="state.pagination.total"
        :items-per-page-options="constant.itemsPerPageOptions" @update:options="loadItems">
        </v-data-table-server>
        </template>
     </PaginaPadrao>
</template>


<script lang="ts" setup>
import PaginaPadrao from "@/components/Paginapadrao.vue";
import { reactive } from 'vue';

import { Pagination } from "@/api/adapters/BaseAdapters"
import { DataTableHeader } from "@/Types/vuetify";
import { InfoDataTableServer,Produto } from "@/Types/index";

const state = reactive({
  listaProdutos: [] as Array<Produto>,
  pagination: { pageSize: 5 } as Pagination,
  search: '' as string,
  infoDataTableServer: {} as InfoDataTableServer,
});

const constant: { cabecalhoProdutos: DataTableHeader[], itemsPerPageOptions: any[] } =
{
  cabecalhoProdutos: [
    { title: 'Nome', align: 'start', sortable: true, key: 'nome' },
    { title: 'Quantidade', align: 'start', sortable: true, key: 'disciplina' },
    { title: 'Preço de compra', align: 'start', sortable: true, key: 'PrecoDeCompra' },
    { title: 'Porcentagen de venda', align: 'start', sortable: true, key: 'porcentagenVenda' },
    { title: 'Preço de venda', align: 'start', sortable: true, key: 'precoDeVenda' },
    { title: 'Preço promocional', align: 'start', sortable: true, key: 'precoPromocional' },
    { title: '', align: 'start', sortable: false, key: 'id' }
  ],
  itemsPerPageOptions: [
    { value: 5, title: '5' },
    { value: 10, title: '10' },
    { value: 25, title: '25' },
    { value: 50, title: '50' },
    { value: 100, title: '100' }
  ]
}

function loadItems({ page, itemsPerPage, sortBy }: InfoDataTableServer) {
  state.infoDataTableServer = { page, itemsPerPage, sortBy }
//   ProdutoService.all({ page, itemsPerPage, sortBy: [{ key: "id", order: "asc" }], search: state.search })
//     .then(({ items, pagination }) => {
//       state.listaProdutos = items
//       state.pagination = pagination
//     }
//     )
}

function atualizar() {
  loadItems(state.infoDataTableServer)
}

</script>

