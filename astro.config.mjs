import { defineConfig } from 'astro/config'
import react from "@astrojs/react"
import cloudflare from '@astrojs/cloudflare'
// import nodejs from '@astrojs/node'

// DEPLOYMENT CONFIGURATION
export default defineConfig({
  integrations: [react()],
  output: 'hybrid',
  adapter: cloudflare(),
  site: 'http://astro-test-azr.pages.dev/'
})

// DEVELOPMENT CONFIGURATION
// export default defineConfig({
//   integrations: [react()],
//   output: 'hybrid',
//   adapter: nodejs({
//     mode: 'standalone'
//   }),
//   site: 'http://localhost:4321/'
// })