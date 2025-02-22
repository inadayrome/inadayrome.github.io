export default function About() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <ol className='list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
          <li className='mb-2'>Software Engineer based in Singapore</li>
          {/* <li>Full Stack Development · Web Data Visualization</li> */}
        </ol>
      </main>
    </div>
  );
}
