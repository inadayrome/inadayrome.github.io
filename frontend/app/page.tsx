import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <ol className='list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
          <li className='mb-2'>Software Engineer based in Singapore</li>
          <li>Full Stack Development · Web Data Visualization</li>
        </ol>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center font-[family-name:var(--font-geist-mono)]'>
        <Link
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='/projects'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='https://nextjs.org/icons/file.svg'
            alt='File icon'
            width={16}
            height={16}
          />
          Projects
        </Link>
        <Link
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='/about'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='https://nextjs.org/icons/window.svg'
            alt='Window icon'
            width={16}
            height={16}
          />
          About
        </Link>
      </footer>
    </div>
  );
}
