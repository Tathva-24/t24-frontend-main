import React from 'react';
import Image from 'next/image';

const ImageGrid = () => {

  return (
    <div className='w-full h-full flex flex-col'>
      <div className="one flex w-full h-64 relative ratio ">
        <div className="relative w-[50%] h-full flex">
          <Image 
            src={'/InnerPages/concert_green.webp'} 
            layout="fill" 
            objectFit="cover" 
            objectPosition="bottom" 
            alt="Grid" 
            className="p-5 " 
          />
          <Image 
            src={'/InnerPages/concert_green.webp'} 
            layout="fill" 
            objectFit="cover" 
            objectPosition="bottom" 
            alt="Grid" 
            className="p-5 " 
          />
        </div>
      </div>
      
      <div className="one flex w-full h-64 relative">
        <div className="relative w-[50%] h-full flex">
          <Image 
            src={'/InnerPages/concert_green.webp'} 
            layout="fill" 
            objectFit="cover" 
            objectPosition="bottom" 
            alt="Grid" 
            className="p-5 " 
          />
          <Image 
            src={'/InnerPages/concert_green.webp'} 
            layout="fill" 
            objectFit="cover" 
            objectPosition="bottom" 
            alt="Grid" 
            className="p-5 " 
          />
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
