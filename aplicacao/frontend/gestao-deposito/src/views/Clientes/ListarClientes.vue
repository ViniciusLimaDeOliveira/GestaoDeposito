<script lang="ts" setup>
import { reactive } from "vue";
import { ClienteService } from "@/api/ClienteService";
import { Pagination } from "@/api/adapters/BaseAdapters";
import { DataTableHeader } from "@/Types/vuetify";
import { InfoDataTableServer, Cliente } from "@/Types/index";
import PaginaPadrao from "@/components/Paginapadrao.vue";

const state = reactive({
  listaClientes: [] as Array<Cliente>,
  pagination: { pageSize: 5 } as Pagination,
  search: "" as string,
  infoDataTableServer: {} as InfoDataTableServer,
});

const constant: {
  cabecalhoClientes: DataTableHeader[];
  itemsPerPageOptions: any[];
} = {
  cabecalhoClientes: [
    { title: "Nome", align: "start", sortable: true, key: "nome" },
    { title: "Endereço", align: "start", sortable: true, key: "endereco" },
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
  ClienteService.all({
    page,
    itemsPerPage,
    sortBy: [{ key: "id", order: "asc" }],
    search: state.search,
  }).then(({ items, pagination }) => {
    state.listaClientes = items;
    state.pagination = pagination;
  });
}

function atualizar() {
  loadItems(state.infoDataTableServer);
}
</script>

<template>
  <PaginaPadrao titulo="Clientes">
    <template v-slot:conteudo>
        <v-data-table-server
          :search="state.search"
          :headers="constant.cabecalhoClientes"
          :items="state.listaClientes"
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
              <td>{{ item.columns.nome }}</td>
              <td>{{ item.columns.endereco }}</td>
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
