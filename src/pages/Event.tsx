import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';
import { Footer } from './../components/Footer';

export function Event() {
  const [isOpen, setIsOpen] = useState(false);
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className='flex flex-col min-h-screen'>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <main className='flex flex-1'>
        {slug ? <Video lessonSlug={slug} /> : <div className='flex-1' />}
        <Sidebar isOpen={isOpen} />
      </main>
      <Footer />
    </div>
  );
}
