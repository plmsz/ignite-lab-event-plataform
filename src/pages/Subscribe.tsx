import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockup from '../assets/code-mockup.png';
import { Footer } from '../components/Footer';
import Loading from '../components/Loading';
import { useCreateSubscriberMutation } from '../graphql/generated';
import { Logo } from './../components/Logo';
import ReactIcon from '../assets/react-icon.svg';

export function Subscribe() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/event');
  };

  return (
    <>
      <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
        <div className='flex w-full max-w-[1100px] items-center justify-between mx-auto mt-20'>
          <div className='max-w-[640px]'>
            <Logo width='208' />
            <h1 className='mt-8 text-[2.5rem] leading-tight text-gray-100'>
              Construa uma{' '}
              <strong className='text-blue-500'>aplicação completa</strong>, do
              zero, com
              <strong className='text-blue-500'> React JS</strong>
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
                placeholder='Seu nome completo'
                className='bg-transparent rounded bg-gray-900 px-5  h-14 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-green-300 focus:ring-green-300'
              />
              <input
                onChange={(event) => setEmail(event.target.value)}
                type='email'
                placeholder='Digite seu email'
                className='bg-transparent rounded bg-gray-900 px-5 h-14 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-green-300 focus:ring-green-300'
              />
              <button
                type='submit'
                disabled={loading}
                className='bg-green-500 rounded mt-4 py-4 uppercase text-sm font-bold hover:bg-green-700 transition-colors disabled:opacity-50 flex justify-center items-center gap-1'
              >
                {loading ? <Loading /> : null} Garantir minha vaga
              </button>
            </form>
          </div>
        </div>
        <img src={ReactIcon} alt="" className='absolute top-1' />
        <img src={mockup} alt='' className='mt-10' />
      </div>
      <Footer />
    </>
  );
}
