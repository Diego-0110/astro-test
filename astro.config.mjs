import { defineConfig } from 'astro/config'
import react from "@astrojs/react"
import netlify from '@astrojs/netlify/functions'
// import nodejs from '@astrojs/node'

// DEPLOYMENT CONFIGURATION
export default defineConfig({
  integrations: [react()],
  adapter: netlify(),
  output: 'hybrid',
  site: 'https://diego-0110-astro-test.netlify.app'
})

// DEVELOPMENT CONFIGURATION
// export default defineConfig({
//   integrations: [react()],
//   output: 'hybrid',
//   adapter: nodejs({
//     mode: 'middleware'
//   }),
// })