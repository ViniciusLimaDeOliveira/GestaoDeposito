<template>
  <PaginaPadrao titulo="Home">
    <template v-slot:conteudo>
        <v-row no-gutters>
          <v-col cols="4" sm="2">
            <v-card :to="{ name: 'Produtos.Lista' }" height="150px">
              <v-card-item >
                <div>
                  <div class="text-h6 mb-1">Lista de produtos</div>
                  <div class="text-caption">
                    Listar todos os produtos disponiveis
                  </div>
                </div>
              </v-card-item>
            </v-card>
          </v-col>

          <v-col cols="4" sm="2">
            <v-card :to="{ name: '' }" height="150px">
              <v-card-item>
                <div>
                  <div class="text-h6 mb-1">Iniciar venda</div>
                  <div class="text-caption">Carrinho de compras</div>
                </div>
              </v-card-item>
            </v-card>
          </v-col>

          <v-col cols="4" sm="2">
            <v-card :to="{ name: '' }" height="150px">
              <v-card-item>
                <div>
                  <div class="text-h6 mb-1">Listar Clientes</div>
                  <div class="text-caption">
                    Listar todos os clientes cadastrados
                  </div>
                </div>
              </v-card-item>
            </v-card>
          </v-col>
          <v-col cols="4" sm="2">
            <v-card :to="{ name: '' }" height="150px">
              <v-card-item>
                <div>
                  <div class="text-h6 mb-1">Adicionar produtos</div>
                  <div class="text-caption">
                      Adicionar novo produto
                  </div>
                </div>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
    </template>
  </PaginaPadrao>
</template>

<script lang="ts" setup>
import PaginaPadrao from "@/components/Paginapadrao.vue";
</script>
