import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Event } from './pages/Event';
import { Subscribe } from './pages/Subscribe';

export function Router() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Subscribe/>} />
          <Route path='/event' element={<Event />} />
          <Route path='/event/lesson/:slug' element={<Event />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
