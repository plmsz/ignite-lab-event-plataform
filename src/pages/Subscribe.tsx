import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockup from '../assets/code-mockup.png';
import { Footer } from '../components/Footer';
import IconLoading from '../components/IconLoading';
import { useCreateSubscriberMutation } from '../graphql/generated';
import { Logo } from './../components/Logo';
import ReactIcon from '../assets/react-icon.svg';
import { useGetFirstLessonQuery } from './../graphql/generated';

export function Subscribe() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();
  const { data } = useGetFirstLessonQuery();
  const firstLesson = data?.lessons[0]?.slug;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    if (data) {
      navigate(`/event/lesson/${firstLesson}`);
    } else {
      navigate(`/event/`);
    }
  };

  return (
    <>
      <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
        <div className='flex md:flex-row flex-col w-full max-w-[1100px] items-center md:justify-between mt-10 md:mt-20'>
          <div className='max-w-[640px] flex flex-col items-center px-6 mb-6 md:items-start'>
            <Logo width='208' />
            <h1 className='mt-8 text-2xl md:text-[2.5rem] leading-tight text-gray-100 text-center md:text-left'>
              Construa uma{' '}
              <strong className='text-green-500'>aplicação completa</strong>, do
              zero, com
              <strong className='text-green-500'> React JS</strong>
            </h1>
            <p className='text-gray-200 leading-relaxed mt-7'>
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado
            </p>
          </div>
          <div className='py-8 px-6 border border-gray-700 bg-gray-500 rounded z-10'>
            <strong className='text-gray-100 text-3xl block mb-6'>
              Inscreva-se gratuitamente
            </strong>
            <form
              className='flex flex-col gap-2 w-full'
              onSubmit={handleSubmit}
            >
              <input
                onChange={(event) => setName(event.target.value)}
                type='text'
                required
                placeholder='Seu nome completo'
                className='bg-transparent rounded bg-gray-900 px-5  h-14 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-pink-300 focus:ring-pink-300'
              />
              <input
                onChange={(event) => setEmail(event.target.value)}
                type='email'
                required
                placeholder='Digite seu email'
                className='bg-transparent rounded bg-gray-900 px-5 h-14 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-pink-300 focus:ring-pink-300'
              />
              <button
                type='submit'
                disabled={loading}
                className='bg-pink-500 rounded mt-4 py-4 uppercase text-sm font-bold hover:bg-pink-700 transition-colors disabled:opacity-50 flex justify-center items-center gap-1'
              >
                {loading ? <IconLoading /> : null} Garantir minha vaga
              </button>
            </form>
          </div>
        </div>
        <img src={ReactIcon} alt='' className='absolute top-1' />
        <img src={mockup} alt='' className='mt-10' />
      </div>
      <Footer />
    </>
  );
}
