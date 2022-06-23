import { Lesson } from './Lesson';
export function Sidebar() {
  return (
    <aside className='w-[348px] p-6 border-l border-gray-600 bg-gray-700'>
      <span className='border-b-2 border-gray-600 pb-6 mb-6 font-bold text-2xl leading-8 block'>
        Cronograma das aulas
      </span>
      <div className='flex flex-col gap-8'>
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
      </div>
    </aside>
  );
}
