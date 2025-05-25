import { createApp } from "vue";
// import "./style.css"; // Removed this line as index.css contains Tailwind directives
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import App from "@/App.vue";
import { router } from "@/routes/router";

import "@fortawesome/fontawesome-free/css/all.css";
import "./styles.css"; // This file should contain Tailwind directives and custom styles

const app = createApp(App);

app.use(PrimeVue, {
	theme: {
		preset: Aura,
		options: {
			darkModeSelector: ".dark-mode",
		},
	},
	ripple: true,
});

app.use(router).mount("#app");
