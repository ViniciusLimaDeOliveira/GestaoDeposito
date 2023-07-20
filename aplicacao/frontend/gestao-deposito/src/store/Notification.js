import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    notificacao: {
      mensagem: "",
      visibilidade: false,
      tipoMensagem: ""
    }
  }),
  getters: {
    notification() {
      return this.notificacao
    }

  },
  actions: {
    notificar(mensagem, tipoMensagem ) {
      this.notificacao.mensagem = mensagem;
      this.notificacao.visibilidade = true;
      this.notificacao.tipoMensagem = tipoMensagem;
    }
  }

});
