'use client';

const ChooseCar = ({ selectedCarBrand }) => {
  return (
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
  );
};

export default ChooseCar;
