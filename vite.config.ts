import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "prompt",
      includeAssets: ["favicon.ico", "masked-icon.svg"],
      manifest: {
        name: "Kalkulator Uang",
        short_name: "Kalkulator Uang",
        description: "Kalkulator dengan input berdasarkan pecahan uang rupiah",
        theme_color: "#F9A8D4",
        start_url: "/",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-180x180.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "maskable_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
    react(),
  ],
});
