import "./ui/style/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./app/router";
import Aura from "@primevue/themes/aura";
import ToastService from "primevue/toastservice";
const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(createPinia());
app.use(router);
app.mount("#app");
