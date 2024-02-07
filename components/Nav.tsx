import Link from 'next/link';
//useparam from next to extract the pathname
import { usePathname } from 'next/navigation';
//interface declaration for each nav page
interface pages {
  name: string;
  path: string;
  Icon: React.FunctionComponent;
}
//component props declaration
interface NavProps {
  items: pages[];
}

function Nav({ items }: NavProps) {
  const activePage = usePathname();
  return (
    <nav className="absolute bottom-0 flex w-full justify-between bg-white/20 p-5 text-4xl text-white md:right-5 md:top-1 md:my-32 md:h-auto md:w-16 md:flex-col md:items-center md:rounded-full md:text-xl">
      {items.map((item) => (
        <Link
          className={`curser-pointer ${
            activePage === item.path &&
            'text-yellow md:text-[22px] md:duration-200'
          }`}
          key={item.name}
          href={item.path}
        >
          <div>
            <item.Icon />{' '}
          </div>
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
