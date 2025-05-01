import CarModel from '@/app/components/CarModel';

export default function page({ params }: { params: { model: string } }) {
  console.log(params.model, 'params.model');

  return (
    <div className='w-full h-[100dvh] flex justify-center items-center'>
      <CarModel model={params.model} />
    </div>
  );
}
