import Logo from '../assets/logo-rocket.svg';
export function Footer() {
  return (
    <>
      <footer className='flex py-6 mx-6 border-t-2 border-gray-600 justify-between items-center'>
        <div className='flex items-center gap-6'>
          <img src={Logo} alt='' />
          <span className='text-gray-300 leading-relaxed'>
            Elaborado por <a href='https://github.com/plmsz'>Paloma Souza</a>
          </span>
        </div>
        <span className='text-gray-300 leading-relaxed'>
          Políticas de privacidade
        </span>
      </footer>
    </>
  );
}
