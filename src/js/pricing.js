import '/scss/pricing.scss';

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { scrollHeader } from './components/header-scroll';
import { useFooterAccordion } from './components/footer-accordion';
import { usePriceSwitcher } from './components/pricing/priceSwitcher';

useTheme();
useBurger();
scrollHeader();
useFooterAccordion();
usePriceSwitcher();
