import { CheckCircle } from 'phosphor-react';

export function Lesson() {
  return (
    <a href='#' className='flex flex-col font-medium'>
      <span className='text-gray-300 mb-2'>Domingo • 20 de junho • 19h00</span>
      <div className='border border-gray-500 p-4 rounded'>
        <header className='flex justify-between items-center'>
          <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
            <CheckCircle size={20} />
            Conteúdo liberado
          </span>
          <span className='text-xs text-white border border-green-300 px-2 py-0.5 rounded'>
            AO VIVO
          </span>
        </header>
        <strong className='text-gray-200 block mt-5'>
          Abertura do evento Ignite labs
        </strong>
      </div>
    </a>
  );
}
