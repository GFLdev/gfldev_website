import { defineStore } from 'pinia'

export const usePreferences = defineStore('preferences', {
  state: () => {
    return {
      userTheme: 'light',
      userLang: 'pt-BR'
    }
  },
  getters: {
    theme: (state) => state.userTheme,
    lang: (state) => state.userLang
  },
  actions: {
    setDarkMode() {
      this.userTheme = 'dark'
    },
    setLightMode() {
      this.userTheme = 'light'
    },
    setPortuguese() {
      this.userLang = 'pt-BR'
    },
    setEnglish() {
      this.userLang = 'en-US'
    }
  }
})
