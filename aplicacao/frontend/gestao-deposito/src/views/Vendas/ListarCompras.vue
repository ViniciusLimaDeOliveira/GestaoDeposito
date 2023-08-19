<script lang="ts" setup>
import { reactive } from "vue";
import { CompraService } from "@/api/CompraService";
import { Pagination } from "@/api/adapters/BaseAdapters";
import { DataTableHeader } from "@/Types/vuetify";
import { InfoDataTableServer, Compra } from "@/Types/index";
import PaginaPadrao from "@/components/Paginapadrao.vue";

const state = reactive({
  listaCompras: [] as Array<Compra>,
  pagination: { pageSize: 5 } as Pagination,
  search: "" as string,
  infoDataTableServer: {} as InfoDataTableServer,
});

const constant: {
  cabecalhoCompras: DataTableHeader[];
  itemsPerPageOptions: any[];
} = {
  cabecalhoCompras: [
    { title: "Cliente", align: "start", sortable: true, key: "Cliente" },
    { title: "Valor Total", align: "start", sortable: true, key: "valorTotal" },
    {
      title: "Anotações",
      align: "start",
      sortable: true,
      key: "notas",
    },
    {
      title: "Data de compra",
      align: "start",
      sortable: true,
      key: "dataCompra",
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
  CompraService.all({
    page,
    itemsPerPage,
    sortBy: [{ key: "id", order: "asc" }],
    search: state.search,
  }).then(({ items, pagination }) => {
    state.listaCompras = items;
    state.pagination = pagination;
  });
}

function atualizar() {
  loadItems(state.infoDataTableServer);
}
</script>

<template>
  <PaginaPadrao titulo="Produtos">
    <template v-slot:conteudo>
        <v-data-table-server
          :search="state.search"
          :headers="constant.cabecalhoCompras"
          :items="state.listaCompras"
          :items-per-page="state.pagination.pageSize"
          :items-length="state.pagination.total"
          :items-per-page-options="constant.itemsPerPageOptions"
          @update:options="loadItems"
        >
          <template v-slot:top>
            <div class="d-flex justify-start align-center">
              <v-text-field
                bg-color="background"
                class="mr-2 ml-2 mb-4 mt-4"
                v-model="state.search"
                :flat="true"
                label="Filtrar"
                hide-details
                variant="solo"
                single-line
              >
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
              <td>{{ item.columns.Cliente.nome}}</td>
              <td>{{ item.columns.dataCompra }}</td>
              <td>{{ item.columns.valorTotal }}</td>
              <td>{{ item.columns.notas }}</td>
              <td class="d-flex justify-end">
                <v-btn icon="mdi-pencil" variant="text" color="info" />
                <v-btn icon="mdi-delete" variant="text" color="error" />
              </td>
            </tr>
          </template>
        </v-data-table-server>
    </template>
  </PaginaPadrao>
</template>
