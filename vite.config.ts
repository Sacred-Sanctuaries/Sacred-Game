import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.js
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({manifest: {
      "short_name": "Sacred Game",
      "name": "Sacred Sanctuaries - A Real Life Regeneration Game",
      "icons": [
        {
          "src": "3markers-globe.svg",
          "sizes": "any",
          "type": "image/svg+xml"
        },
        {
          "src": "3markers-globe_256.png",
          "sizes": "256x256",
          "type": "image/png"
        },
      ],
      "start_url": "/",
      "display": "fullscreen",
      "orientation": "natural"
    }})
  ]
})
