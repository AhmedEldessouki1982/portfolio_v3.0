//import general google font called sora
import { Sora } from 'next/font/google';
//importing component navbar and its meta data
import { links } from '@/data/Navdata';
import Nav from './Nav';
//importing component Header and its meta data
import { social } from '@/data/Headerdata';
import Header from './Header';

const sora = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sora',
});

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`page relative bg-site bg-cover bg-no-repeat font-sora ${sora.variable}`}
    >
      <Header social={social} />
      <Nav items={links} />
      {children}
    </div>
  );
}

export default Layout;
