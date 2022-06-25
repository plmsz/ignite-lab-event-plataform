import { useGetLessonsQuery } from '../graphql/generated';
import { Lesson } from './Lesson';

export function Sidebar() {
  const { data } = useGetLessonsQuery()
  return (
    <aside className='w-[348px] p-6 border-l border-gray-600 bg-gray-700'>
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
