import Image from 'next/image';

export default function Home() {
  return (
    <main className='w-full h-[100dvh] flex justify-center items-center'>
      <div className='flex flex-col gap-[25px] items-center'>
        <h1 className='text-[50px]'>wellcome to main page</h1>
        <button className='w-fit p-[25px] rounded-4xl flex items-center bg-[#2911a2] cursor-pointer'>
          Create your pizza
        </button>
      </div>
    </main>
  );
}
