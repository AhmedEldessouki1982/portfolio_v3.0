import Link from 'next/link';
import { ReactNode } from 'react';

interface socialLink {
  name: string;
  path: string;
  Icon: React.FunctionComponent;
}

interface headerProps {
  // logo: string;
  social: socialLink[];
}

function Header({ social }: headerProps) {
  return (
    <header className="flex flex-col items-center gap-1 bg-primary/60 px-32 text-white md:flex-row md:justify-between">
      <span className="text-xl uppercase md:text-4xl">
        Eldes<p className="inline text-red">souki</p>
      </span>
      <div className="flex gap-5 text-xl md:text-2xl">
        {social.map((element) => (
          <Link
            className="cursor-pointer hover:scale-90"
            key={element.name}
            href={element.path}
          >
            <element.Icon />
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
