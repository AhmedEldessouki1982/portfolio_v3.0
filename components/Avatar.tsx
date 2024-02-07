import React from 'react';
import Image from 'next/image';
import Personal from '@/public/assets/Personal.png';

function Avatar() {
  return <Image width={400} height={600} alt="avatar" src={Personal} />;
}

export default Avatar;
