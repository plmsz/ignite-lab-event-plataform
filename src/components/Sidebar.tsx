import { useGetLessonsQuery } from '../graphql/generated';
import { Lesson } from './Lesson';
import classNames from 'classnames';

interface SidebarProps {
  isOpen: boolean;
}
export function Sidebar({ isOpen }: SidebarProps) {
  const { data } = useGetLessonsQuery();

  return (
    <aside
      className={classNames(
        'p-6 border-l border-gray-600 bg-gray-700 w-full md:w-[348px] absolute z-50 md:relative md:h-auto',
        {
          'left-[50%] translate-x-[50%] md:left-0 md:translate-x-0': !isOpen,
          'left-0 translate-x-0': isOpen,
        }
      )}
    >
      <span className='border-b-2 border-gray-600 pb-6 mb-6 font-bold text-2xl leading-8 block'>
        Cronograma de aulas
      </span>
      <div className='flex flex-col gap-8'>
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
