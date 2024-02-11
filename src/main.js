import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";
import PrimeVue from "primevue/config";

import App from "./App.vue";
import router from "./router";
import config from "../formkit.config.js";
import Luber from "@/presets/luber";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(plugin, defaultConfig(config));
app.use(PrimeVue, {
  unstyled: true,
  pt: Luber,
});

app.mount("#app");
