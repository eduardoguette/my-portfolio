import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/static'
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    analytics: true,
    speedInsights: {
      enabled: true
    }
  })
})
