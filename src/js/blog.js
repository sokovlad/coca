import '/scss/blog.scss';

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { scrollHeader } from './components/header-scroll';
import { useFooterAccordion } from './components/footer-accordion';
import { useBlogSlider } from './components/home/slider';
import { useBlogTabs } from './components/blog/blog-tabs';

useTheme();
useBurger();
scrollHeader();
useFooterAccordion();
useBlogSlider();
useBlogTabs();
