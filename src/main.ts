import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'

// Toast notifications
import Toast, { type PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

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

const pinia = createPinia()

// Toast configuration
const toastOptions: PluginOptions = {
  position: POSITION.TOP_RIGHT,
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false
};

createApp(App)
  .use(router)
  .use(pinia)
  .use(Toast, toastOptions)
  .mount('#app')
