import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwind from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
	plugins: [
		vue(),
		tailwind(), // ← Vite plugin only :contentReference[oaicite:0]{index=0}
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("src/", import.meta.url)),
		},
	},
});
