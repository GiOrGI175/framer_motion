import ChooseCar from '@/app/components/ChooseCar';
import { cars } from '@/app/services/cars';

type Params = Promise<{
  car: string;
}>;

export default async function page({ params }: { params: Params }) {
  const { car } = await params;

  const selectedCarBrand = cars.find((item) => item.car === car);

  console.log(selectedCarBrand, 'selectedCarBrand');

  if (!selectedCarBrand) {
    return <div>Car brand not found</div>;
  }

  return (
    <div className='w-full h-[100dvh] flex justify-center items-center'>
      <ChooseCar selectedCarBrand={selectedCarBrand} />
    </div>
  );
}
