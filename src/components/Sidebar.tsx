import { Lesson } from './Lesson';
import { useQuery, gql } from '@apollo/client';

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: 'live' | 'class';
  }[];
}

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      title
      availableAt
      lessonType
    }
  }
`;

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);
console.log(data)
  return (
    <aside className='w-[348px] p-6 border-l border-gray-600 bg-gray-700'>
      <span className='border-b-2 border-gray-600 pb-6 mb-6 font-bold text-2xl leading-8 block'></span>
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
