import Logo from '../assets/logo-rocket.svg';
export function Footer() {
  return (
    <>
      <footer className='flex flex-col py-6 border-t-2 border-gray-600 items-center w-full md:justify-between md:flex-row md:mx-6 md:w-auto'>
        <div className='flex flex-col items-center md:justify-between gap-4 md:flex-row md:gap-6'>
          <img src={Logo} alt='' className='' />
          <span className='text-gray-300 leading-relaxed'>
            Elaborado por <a href='https://github.com/plmsz'>Paloma Souza</a>
          </span>
        </div>
        <span className='text-gray-300 leading-relaxed mt-6 md:mt-0'>
          Políticas de privacidade
        </span>
      </footer>
    </>
  );
}
