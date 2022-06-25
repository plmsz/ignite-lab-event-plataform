import { format, isPast } from 'date-fns';
import { CheckCircle, Lock } from 'phosphor-react';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );
  const { slug } = useParams<{ slug: string }>();

  const isActiveLesson = slug === props.slug;

  return (
    <Link
      to={`${isLessonAvailable ? `/event/lesson/${props.slug}` : '#'}`}
      className='flex flex-col font-medium group'
    >
      <span className='text-gray-300 mb-2'>{availableDateFormatted}</span>
      <div className='flex items-center'>
        <div
          className={classNames({
            'arrow-left': isActiveLesson,
          })}
        />
        <div
          className={classNames('p-4 rounded w-full', {
            'group-hover:border-green-500 border border-gray-500 ':
              !isActiveLesson,
            'bg-green-500 group-focus:border-green-500':
              isActiveLesson && isLessonAvailable,
            'group-hover:border-orange-500 cursor-not-allowed': !isLessonAvailable,
          })}
        >
          <header className='flex justify-between items-center'>
            {isLessonAvailable ? (
              <span
                className={classNames(
                  'text-sm font-medium flex items-center gap-2',
                  {
                    'text-white': isActiveLesson,
                    'text-blue-500 ': !isActiveLesson,
                  }
                )}
              >
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
          <strong
            className={classNames('block mt-5', {
              'text-white': isActiveLesson,
              'text-gray-200 ': !isActiveLesson,
            })}
          >
            {props.title}
          </strong>
        </div>
      </div>
    </Link>
  );
}
