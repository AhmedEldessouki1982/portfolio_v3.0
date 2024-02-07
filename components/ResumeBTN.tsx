import Link from 'next/link';
import Image from 'next/image';
import rounded_txt from '@/public/assets/pages/rounded_txt.png';
import { HiArrowDown } from 'react-icons/hi2';

function ResumeBTN() {
  return (
    <div className="relative h-32 w-32 animate-pulse rounded-full border border-white/60">
      <Link href="https://drive.google.com/drive/folders/1FfiwMnWoRvqVLEN5iXIOkromocRSNoO-?usp=sharing">
        <Image
          className="animate-spin-slow"
          src={rounded_txt}
          width={145}
          height={145}
          alt="rounded txt"
        />
      </Link>
      <HiArrowDown className="absolute left-[2.9rem] top-12 animate-bounce text-4xl text-white/60 duration-150" />
    </div>
  );
}

export default ResumeBTN;
