import { GiOilPump } from 'react-icons/gi';
import { FaComputer, FaGauge } from 'react-icons/fa6';
import { MdOutlineSchool, MdTranslate } from 'react-icons/md';
import { RiEnglishInput } from 'react-icons/ri';

interface Information {
  subject: string;
  Icons?: React.FunctionComponent;
  timePeriod: string;
  branching?: string[];
}

interface AboutMeStructure {
  title: string;
  info: Information[];
}

export const aboutMedata: AboutMeStructure[] = [
  {
    title: 'skills',
    info: [
      {
        subject: 'DCS',
        timePeriod: '2005 - 2023',
        branching: [
          'Honeywell experion PKS',
          'Siemens SPPA-T3000',
          'Yokogawa centum VP',
        ],
        Icons: FaComputer,
      },
      {
        subject: 'instrumentation',
        timePeriod: '2005 - 2023',
        branching: [
          'ESDs & FGS',
          'Analyzers',
          'Machine Monitoring Systems',
          'control valves & MOVs',
        ],
        Icons: FaGauge,
      },
      {
        subject: 'process',
        timePeriod: '2005 - 2023',
        branching: ['Oil & Gas', 'Gas turbines', 'Steam turbines'],
        Icons: GiOilPump,
      },
    ],
  },
  {
    title: 'worked at',
    info: [
      {
        subject: 'ILF Consulting Engineers',
        timePeriod: '2023 - till moment',
      },
      {
        subject: 'Elsewedy electric',
        timePeriod: '2015 - 2023',
      },
      {
        subject: 'Kharafi National',
        timePeriod: '2010 - 2015',
      },
      {
        subject: 'East delta power co.',
        timePeriod: '2005 - 2010',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        subject: 'Zagazig University, Electrical Engineering',
        timePeriod: '1999 - 2005',
        Icons: MdOutlineSchool,
      },
    ],
  },
  {
    title: 'languages',
    info: [
      {
        subject: 'English',
        timePeriod: 'fluent',
        Icons: RiEnglishInput,
      },
      {
        subject: 'arabic',
        timePeriod: 'native',
        Icons: MdTranslate,
      },
    ],
  },
];
