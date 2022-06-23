import { format, isPast } from 'date-fns';
import { CheckCircle, Lock } from 'phosphor-react';
import ptBR from 'date-fns/locale/pt-BR'
interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {locale: ptBR})

  return (
    <a href='#' className='flex flex-col font-medium'>
      <span className='text-gray-300 mb-2'>{availableDateFormatted}</span>
      <div className='border border-gray-500 p-4 rounded'>
        <header className='flex justify-between items-center'>
          {isLessonAvailable ? (
            <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className='text-xs text-white border border-green-300 px-2 py-0.5 rounded'>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className='text-gray-200 block mt-5'>{props.title}</strong>
      </div>
    </a>
  );
}
