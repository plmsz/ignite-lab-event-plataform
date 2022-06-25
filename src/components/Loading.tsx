import { Circle, CircleNotch, CirclesFour } from 'phosphor-react';

export function Loading() {
  return (
    <div className='flex flex-1 text-center justify-center py-40'>
      <div className='flex h-2 items-baseline'>
        <span className='text-3xl mr-2 animate-pulse'>Carregando</span>
        <div className='flex'>
          <div className='dot animate-loader circle'></div>
          <div className='dot animate-loader animation-delay-200 circle'></div>
          <div className='dot animate-loader animation-delay-400 circle'></div>
        </div>
      </div>
    </div>
  );
}
