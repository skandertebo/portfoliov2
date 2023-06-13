import { component$ } from '@builder.io/qwik';
import {
  HiBriefcaseOutline,
  HiGlobeAltOutline,
  HiHomeModernOutline,
  HiInformationCircleOutline,
  HiLightBulbOutline,
  HiStarOutline
} from '@qwikest/icons/heroicons';

export default [
  {
    path: '/',
    name: 'Home',
    icon: component$(HiHomeModernOutline)
  },
  {
    path: '/about/',
    name: 'About',
    icon: component$(HiInformationCircleOutline)
  },
  {
    path: '/experience/',
    name: 'Experience',
    icon: component$(HiBriefcaseOutline)
  },
  {
    path: '/projects/',
    name: 'Projects',
    icon: component$(HiLightBulbOutline)
  },
  {
    path: '/skills/',
    name: 'Skills',
    icon: component$(HiStarOutline)
  },
  {
    path: '/socials/',
    name: 'Socials',
    icon: component$(HiGlobeAltOutline)
  }
];
