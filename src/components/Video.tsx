import { DefaultUi, Player, Youtube } from '@vime/react';
import '@vime/core/themes/default.css';
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from 'phosphor-react';
import { gql, useQuery } from '@apollo/client';

const GET_LESSONS_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      description
      title
      videoId
      teacher {
        avatarURL
        bio
        name
      }
    }
  }
`;
interface GetLessonBySlugResponse {
  lesson: {
    description: string;
    title: string;
    videoId: string;
    teacher: {
      avatarURL: string;
      bio: string;
      name: string;
    };
  };
}

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(
    GET_LESSONS_BY_SLUG_QUERY,
    {
      variables: {
        slug: props.lessonSlug,
      },
    }
  );

  if (!data) {
    return (
      <div className='flex-1'>
        <h1>Carregando...</h1>
      </div>
    );
  }
  return (
    <div className='flex-1'>
      <div className='bg-black flex justify-center'>
        <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
          <Player>
            <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className='p-8 max-w-[1100px] mx-auto'>
        <div className='flex items-start gap-16'>
          <div className='flex-1'>
            <h1 className='font-bold text-2xl text-gray-100 mb-4'>
              {data.lesson.title}
            </h1>
            <p className='text-gray-200 leading-relaxed'>
              {data.lesson.description}
            </p>
            <div className='flex items-center gap-4 mt-6'>
              <img
                src={data.lesson.teacher.avatarURL}
                alt=''
                className='border-2 border-blue-500 rounded-full w-16 h-16'
              />
              <div className='leading-relaxed'>
                <strong className='text-2xl text-gray-100 block'>
                  {data.lesson.teacher.name}
                </strong>
                <span className='text-sm text-gray-300 block'>
                  {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>
          <div>
            <a
              href='#'
              className='bg-green-500 rounded flex items-center justify-center gap-2 px-3 py-4 w-[236px] uppercase text-sm font-bold mb-4 hover:bg-green-700 transition-colors'
            >
              <DiscordLogo size={24} />
              Comunidade no discord
            </a>
            <a
              href='#'
              className='border border-blue-500 text-blue-500 rounded flex items-center justify-center gap-2 px-3 py-4 w-[236px] uppercase font-bold text-sm hover:bg-blue-500 hover:text-gray-900 transition-colors'
            >
              <Lightning size={24} /> Acesse o desafio
            </a>
          </div>
        </div>
        <div className='flex gap-8 mt-20 grid grid-cols-2'>
          <a
            href='#'
            className='flex items-center bg-gray-700 rounded overflow-hidden flex items-strech gap-6 hover:bg-gray-600 transition-colors'
          >
            <div className='bg-green-500 h-full p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-2x'>Material complementar</strong>
              <p className='text-sm text-gray-200 mt-2'>
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} color='#81D8F7' />
            </div>
          </a>
          <a
            href='#'
            className='flex items-center bg-gray-700 rounded overflow-hidden flex items-strech gap-6 hover:bg-gray-600 transition-colors'
          >
            <div className='bg-green-500 h-full p-6 flex items-center'>
              <Image size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-2x'>Wallpapers exclusivos</strong>
              <p className='text-sm text-gray-200 mt-2'>
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} color='#81D8F7' />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
