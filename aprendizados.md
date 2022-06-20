npm create vite@latest
npm i tailwindcss postcss autoprefixer -D
npx tailwindcss init -p

CMS = Content Management System 
Headless CMS- GraphCMS - Painel de admin (dados fornecidos através de uma API REST ou GraphQL)
https://graphcms.com/
​http://rseat.in/lab-graphcms

- CMS headless pra ecommerce?
 - Shopify, Saleor ou Medura

# Tailwind

## Global css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
    @apply bg-zinc-900 text-zinc-100
}
    
```
