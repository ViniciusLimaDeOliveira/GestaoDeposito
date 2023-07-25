import { defineStore } from "pinia";
import { Notificacao } from "@/Types/index";

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    notificacao: {} as Notificacao
  }),
  getters: {
    notification(): Notificacao {
      return this.notificacao
    }
  },
  actions: {
    notificar(notificacao: Notificacao) {
      this.notificacao = notificacao;
    }
  }
});
