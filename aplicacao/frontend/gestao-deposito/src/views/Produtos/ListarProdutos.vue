<script lang="ts" setup>
import { reactive } from "vue";
import { ProdutoService } from "@/api/ProdutoService";
import { Pagination } from "@/api/adapters/BaseAdapters";
import { DataTableHeader } from "@/Types/vuetify";
import { InfoDataTableServer, Produto } from "@/Types/index";

const state = reactive({
  listaProdutos: [] as Array<Produto>,
  pagination: { pageSize: 5 } as Pagination,
  search: "" as string,
  infoDataTableServer: {} as InfoDataTableServer,
});

const constant: {
  cabecalhoProdutos: DataTableHeader[];
  itemsPerPageOptions: any[];
} = {
  cabecalhoProdutos: [
    { title: "Nome", align: "start", sortable: true, key: "nome" },
    { title: "Quantidade", align: "start", sortable: true, key: "quantidade" },
    {
      title: "Preço de compra",
      align: "start",
      sortable: true,
      key: "precoDeCompra",
    },
    {
      title: "Porcentagen de venda",
      align: "start",
      sortable: true,
      key: "porcentagenVenda",
    },
    {
      title: "Preço de venda",
      align: "start",
      sortable: true,
      key: "precoDeVenda",
    },
    {
      title: "Preço promocional",
      align: "start",
      sortable: true,
      key: "precoPromocional",
    },
    { title: "", align: "start", sortable: false, key: "id" },
  ],
  itemsPerPageOptions: [
    { value: 5, title: "5" },
    { value: 10, title: "10" },
    { value: 25, title: "25" },
    { value: 50, title: "50" },
    { value: 100, title: "100" },
  ],
};

function loadItems({ page, itemsPerPage, sortBy }: InfoDataTableServer) {
  state.infoDataTableServer = { page, itemsPerPage, sortBy };
  ProdutoService.all({
    page,
    itemsPerPage,
    sortBy: [{ key: "id", order: "asc" }],
    search: state.search,
  }).then(({ items, pagination }) => {
    state.listaProdutos = items;
    state.pagination = pagination;
  });
}

function atualizar() {
  loadItems(state.infoDataTableServer);
}

</script>


<template>
  <v-card>
    <v-card-title>
      Produtos
    </v-card-title>


    
    <v-data-table-server
      :search="state.search"
      :headers="constant.cabecalhoProdutos"
      :items="state.listaProdutos"
      :items-per-page="state.pagination.pageSize"
      :items-length="state.pagination.total"
      :items-per-page-options="constant.itemsPerPageOptions"
      @update:options="loadItems"
    >
    <template v-slot:top>
    <div class="d-flex justify-start align-center">
      <v-text-field bg-color="background" class="mr-2 ml-2 mb-4 mt-4" v-model="state.search" :flat="true"
        label="Filtrar" hide-details variant="solo" single-line>
        <template #prepend-inner>
          <div class="icon-container">
            <v-icon>mdi-magnify</v-icon>
          </div>
        </template>
      </v-text-field>
      <div class="mr-4">
        <DisciplinaForm @submitted="atualizar"></DisciplinaForm>
      </div>
    </div>
  </template>
  <template v-slot:item="{ item }">
    <tr>
      <td>{{ item.columns.nome }}</td>
      <td>{{ item.columns.descricao }}</td>
      <td>{{ item.columns.quantidade }}</td>
      <td>{{ item.columns.precoDeCompra }}</td>
      <td>{{ item.columns.porcentagenVenda }}</td>
      <td>{{ item.columns.precoDeVenda }}</td>
      <td>{{ item.columns.precoPromocional }}</td>
      <td class="d-flex justify-end">
        <v-btn icon="mdi-pencil" variant="text" color="info" />
        <v-btn icon="mdi-delete" variant="text" color="error" />
      </td>
    </tr>
  </template>
    </v-data-table-server>
  </v-card>
</template>


