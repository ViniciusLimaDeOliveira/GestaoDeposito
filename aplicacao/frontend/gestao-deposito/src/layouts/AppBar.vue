<script setup>
</script>

<template>
  <v-app-bar app :elevation="2" color="primary">
    <v-app-bar-title>
      <v-btn :to="{name: 'Home'}" icon="mdi-home" elevation="1" size="small" class="mx-2 bg-white text-blue-darken-4"></v-btn>
      Gestão Deposito
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <!-- <v-btn :to="{name: ''}" icon="mdi-cog" elevation="1" size="small" class="mx-2 bg-white text-blue-darken-4"></v-btn> -->
    <!-- <v-btn icon="mdi-account" elevation="1" size="small" class="mx-2 bg-white text-blue-darken-4"></v-btn> -->
  </v-app-bar>
</template>