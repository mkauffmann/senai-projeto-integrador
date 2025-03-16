import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Importando os estilos CSS originais
import './assets/css/shared.css'
import './assets/css/home.css'
import './assets/css/modal.css'
import './assets/css/catalogo.css'
import './assets/css/sobre.css'

// Importando o Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App)
  .use(router)
  .mount('#app')
