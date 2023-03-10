import { defineStore } from 'pinia';
export const useAppStore = defineStore('app', {
  state: () => ({
    theme: '',
  }),
  getters: {},
  actions: {
    toggleTheme(dark: boolean) {
      this.theme = dark ? 'dark' : 'light';
      document.documentElement.classList[dark ? 'add': 'remove']('dark');
    },
  },
  persist: [
    {
      paths: ['theme'],
      key: 'theme',
      storage: localStorage,
    }
  ]
})