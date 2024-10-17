import '../assets/scss/contact.scss';

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { scrollHeader } from './components/header-scroll';
import {
  useInsightSlider,
  usePartnersSlider,
  useTestimonialsSlider,
} from './components/home/slider';
import { useFooterAccordion } from './components/footer-accordion';
import { useMap } from './components/map';

useTheme();
useBurger();
scrollHeader();
useInsightSlider();
usePartnersSlider();
useTestimonialsSlider();
useFooterAccordion();
useMap();
