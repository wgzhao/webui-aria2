import App from "./App.vue";
import "./style.css";
import "primeicons/primeicons.css";
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import { setupI18n } from "./plugins/i18n.ts";
import en_US from "./locales/en_US.json";

const i18n = setupI18n({
  legacy: false,
  locale: "en_US",
  fallbackLocale: "en_US",
  messages: {
    en_US,
  },
});
const app = createApp(App);

app
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .use(i18n);
app.mount("#app");
