import React from 'react';
import style from './ImageGrid.module.css';
import GridImg from './GridImg';
import Image from 'next/image';
import Car from './InnerPages/concert_green.webp'; // Ensure this path is correct

const ImageGrid = () => {
  const img = Car;
  const img1 = Car;
  const img2 = Car;
  const img3 = Car;

  return (
    <div className='bg-red-600 w-64 h-64'>
      <div className="w-full h-full">
        <Image src={img} alt="Grid" className="object-cover w-full h-full" />
      </div>
    </div>
  );
}

export default ImageGrid;
