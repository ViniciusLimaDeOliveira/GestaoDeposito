<script setup>
import AppBar from './AppBar.vue'
import AppView from './AppView.vue'
import Notification from '@/components/notification/Notification.vue';
</script>

<template>
  <v-app>
    <app-bar v-if="$route.name != 'Login'" />
    <Notification></Notification>
    <app-view />
  </v-app>
</template>
