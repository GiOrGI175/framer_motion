import ChooseCar from '@/app/components/ChooseCar';
import { cars } from '@/app/services/cars';

export default function page({ params }: { params: { car: string } }) {
  console.log(params.car);

  const selectedCarBrand = cars.find((item) => item.car === params.car);

  return (
    <div className='w-full h-[100dvh] flex justify-center items-center'>
      <ChooseCar selectedCarBrand={selectedCarBrand} />
    </div>
  );
}
