import ChooseCar from '@/app/components/ChooseCar';
import { cars } from '@/app/services/cars';

export default async function page({ params }: { params: { car: string } }) {
  const selectedCarBrand = cars.find((item) => item.car === params.car);

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
