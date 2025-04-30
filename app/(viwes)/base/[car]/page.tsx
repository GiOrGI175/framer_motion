import { cars } from '@/app/services/cars';

export default function page({ params }: { params: { car: string } }) {
  console.log(params.car);

  const selectedCarBrand = cars.find((item) => item.car === params.car);

  return (
    <div className='w-full h-[100dvh] flex justify-center items-center'>
      <div>
        <h2 className='font-bold text-[20px] border-b-[1px] border-[black]'>
          Choose Your car brand
        </h2>
        <div>
          <ul className='py-[5px]'>
            {selectedCarBrand?.carsArr.map((car, index) => (
              <li key={index} className='py-[5px] font-medium'>
                {car.name} - {car.year} - ${car.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
