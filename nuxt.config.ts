// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss","@fedorae/nuxt-uikit"],
  app:{
    head:{
      title: "Gestion Locataire",
      link: [
       
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' }
      ]
    
    }
    
  },
  css:[
    '@/assets/main.css'
  ]
})