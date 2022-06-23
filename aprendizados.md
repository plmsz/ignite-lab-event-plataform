npm create vite@latest
npm i tailwindcss postcss autoprefixer -D
npx tailwindcss init -p
npm i phosphor-react
npm i date-fns

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

# Tailwind

Medidas são múltiplas de 4

## Global css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-zinc-900 text-zinc-100;
}

# theme-colors e font-family

theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, san-serif',
      },
      colors: {
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        }
      },
    },
}
}

# Transforma svg em jsx
https://svg2jsx.com/
```

# flex-1
Três valores: flex-grow | flex-shrink | flex-basis 
~~~css
.flex-1 {
    flex: 1 1 0%;
}
~~~

# font smoothing
 Smooth the font on the level of the pixel, as opposed to the subpixel. Switching from subpixel rendering to antialiasing for light text on dark backgrounds makes it look lighter.
`--webkit-font-smoothing: antialiased`

# Data
 const isLessonAvailable = isPast(props.availableAt)
   const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {locale: ptBR})