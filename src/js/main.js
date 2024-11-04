import '/scss/main.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { scrollHeader } from './components/header-scroll';
import {
  useInsightSlider,
  usePartnersSlider,
  useTestimonialsSlider,
} from './components/home/slider';
import { useFooterAccordion } from './components/footer-accordion';

useTheme();
useBurger();
scrollHeader();
useInsightSlider();
usePartnersSlider();
useTestimonialsSlider();
useFooterAccordion();
