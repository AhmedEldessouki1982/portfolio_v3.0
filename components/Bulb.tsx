import React from 'react';
import Image from 'next/image';
import bulb from '@/public/assets/bulb.png';

export const Bulb: React.FC<any> = () => {
  return (
    <div className="absolute -left-28 top-52 animate-pulse mix-blend-color-dodge duration-100 md:left-20">
      <Image src={bulb} width={200} height={200} alt="bulb" />
    </div>
  );
};
