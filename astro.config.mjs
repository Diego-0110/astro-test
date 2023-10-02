import { defineConfig } from 'astro/config'
import react from "@astrojs/react"
import netlify from '@astrojs/netlify/functions'
// import nodejs from '@astrojs/node'

// DEPLOYMENT CONFIGURATION
export default defineConfig({
  integrations: [react()],
  adapter: netlify(),
  output: 'hybrid'
})

// DEVELOPMENT CONFIGURATION
// export default defineConfig({
//   integrations: [react()],
//   output: 'hybrid',
//   adapter: nodejs({
//     mode: 'middleware'
//   }),
// })