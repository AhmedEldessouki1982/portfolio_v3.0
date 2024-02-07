import {
  RiLinkedinLine,
  RiGithubLine,
  RiFacebookLine,
  RiWhatsappLine,
} from 'react-icons/ri';

interface link {
  name: string;
  path: string;
  Icon: React.FunctionComponent;
}

export const social: link[] = [
  {
    name: 'linkedin',
    path: 'https://www.linkedin.com/in/dosoky/',
    Icon: RiLinkedinLine,
  },
  {
    name: 'github',
    path: 'https://github.com/AhmedEldessouki1982',
    Icon: RiGithubLine,
  },
  {
    name: 'facebook',
    path: 'https://www.facebook.com/eldosoky',
    Icon: RiFacebookLine,
  },
  { name: 'whatsapp', path: '', Icon: RiWhatsappLine },
];
