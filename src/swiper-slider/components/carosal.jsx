
import React from 'react';
import { Carousel } from 'flowbite-react';

const images = [
  './slide1.webp',
  './slide2.webp',

];

const CarouselExample = () => {
  return (
    <div className="w-full h-full">
      <Carousel>
        {images.map((src, index) => (
          <div key={index} className="relative">
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center " >
             <div className='grid grid-cold-1 '>
             <p className="text-center xl:pb-10 text-xs">New Arrival </p>
             <h1 className='xl:text-5xl text-center '>Fashion For All Season</h1>
             <p className='text-center xl:text-xs xl:pt-5 hidden xl:block'>Make your best movements more stylish with our latest design for clothing. <br />Unigue design for the unigue quench of style.</p>
             <a href='/shop1' className='bg-white rounded-full xl:ml-36 xl:mr-36 xl:mt-10 xl:text-sm font-semibold xl:p-2 text-center'>SHOP NOW</a>
             </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselExample;

