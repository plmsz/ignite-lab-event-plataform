import { Logo } from './Logo';
import { X } from 'phosphor-react';
import { List } from 'phosphor-react';

interface HeaderProps {
  setIsOpen: (state: boolean) => void;
  isOpen: boolean;
}
export function Header({ setIsOpen, isOpen }: HeaderProps) {

  
  return (
    <header className='w-full py-5 flex items-center px-6 justify-between bg-gray-700 border-b border-gray-600 text-blue-500'>
      <Logo width={window.innerWidth < 1024 ? '167' : '237'} />
      <div className='flex items-center gap-2 md:hidden'>
        <span className='text-sm text-gray-100'>Aulas</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <List size={32} />}
        </button>
      </div>
    </header>
  );
}
