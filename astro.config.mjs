import { defineConfig } from 'astro/config';
import  Analytics  from '@astrojs/analytics'; 
import tailwind from "@astrojs/tailwind"; 

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),

});  