import '/scss/about.scss';

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { scrollHeader } from './components/header-scroll';
import { useFooterAccordion } from './components/footer-accordion';

useTheme();
useBurger();
scrollHeader();
useFooterAccordion();
