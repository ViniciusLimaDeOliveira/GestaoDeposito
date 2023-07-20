<script setup>
const props = defineProps({
  titulo: {
    type: String,
    required: true
  }
})
</script>

<template>
  <v-container>
    <v-responsive>
      <h1 class="font-weight-light"> {{ props.titulo }} </h1>

      <slot name="conteudo"></slot>

    </v-responsive>
  </v-container>
</template>