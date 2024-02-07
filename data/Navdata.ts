import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

interface link {
  name: string;
  path: string;
  Icon: React.FunctionComponent;
}

export const links: link[] = [
  { name: 'home', path: '/', Icon: HiHome },
  { name: 'about', path: '/about', Icon: HiUser },
  { name: 'services', path: '/services', Icon: HiRectangleGroup },
  { name: 'work', path: '/work', Icon: HiViewColumns },
  {
    name: 'testimonials',
    path: '/testimonials',
    Icon: HiChatBubbleBottomCenterText,
  },
  { name: 'contact', path: '/contact', Icon: HiEnvelope },
];
