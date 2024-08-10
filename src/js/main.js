import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { scrollHeader } from './components/header-scroll';
import { useInsightSlider } from './components/slider';
import { usePartnersSlider } from './components/slider';
useTheme();
useBurger();
scrollHeader();
useInsightSlider();
usePartnersSlider();
