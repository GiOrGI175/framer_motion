import CarModel from '@/app/components/CarModel';

type Params = Promise<{
  model: string;
}>;

export default async function Page({ params }: { params: Params }) {
  const { model } = await params;

  return (
    <div className='w-full h-[100dvh] flex justify-center items-center'>
      <CarModel model={model} />
    </div>
  );
}
