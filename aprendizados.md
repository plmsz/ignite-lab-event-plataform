npm create vite@latest
npm i tailwindcss postcss autoprefixer -D
npx tailwindcss init -p

# GraphCMS

query = buscar dados
mutation = alterar informações
CMS = Content Management System
Headless CMS- GraphCMS - Painel de admin (dados fornecidos através de uma API REST ou GraphQL)
https://graphcms.com/
​http://rseat.in/lab-graphcms

- CMS headless pra ecommerce?
- Shopify, Saleor ou Medura

## Exemplo de query

```
query MyQuery {
  lessons {
    id
    slug
    title
    teacher {
      bio
      avatarURL
      name
    }
  }
}
```

# Tailwind

## Global css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-zinc-900 text-zinc-100;
}
```

# Apollo

npm i @apollo/client graphql

import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
uri: 'https://api-ap-southeast-2.graphcms.com/ ...',
cache: new InMemoryCache()
})

# Buscando os dados com useEffect

```tsx
const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

useEffect(() => {
  client
    .query({
      query: GET_LESSONS_QUERY,
    })
    .then((response) => {
      console.log(response.data);
    });
}, []);
```

# Buscando dados com hook personalizado

```tsx
import { gql, useQuery } from '@apollo/client';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;


const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
      
```
