import '/scss/about.scss';

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { scrollHeader } from './components/header-scroll';
import { useFooterAccordion } from './components/footer-accordion';
import { useAboutSlider } from './components/home/slider';
import { useTeamSlider } from './components/home/slider';

useTheme();
useBurger();
scrollHeader();
useFooterAccordion();
useAboutSlider();
useTeamSlider();
