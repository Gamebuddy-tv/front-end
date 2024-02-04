import { createApp, h } from "vue";
import { createPinia } from 'pinia'
import VueLazyload from "@jambonn/vue-lazyload";

import App from "./App.vue";
import router from "./pages";

import "./index.css";

import error from "./assets/error.png";

const pinia = createPinia()

createApp({
  render: () => h(App),
})
  .use(router)
  .use(VueLazyload, {
    observer: true,
    preLoad: 1.3,
    error,
    attempt: 1,
  })
  .use(pinia)
  .mount("#app");
