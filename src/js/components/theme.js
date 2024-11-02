import { useMap } from './map';
export const useTheme = () => {
  const themeTarget = document.querySelector('[data-theme]');
  const themeSwitcher = document.querySelector('[data-theme-switcher]');

  const mapDiv = document.getElementById('map');

  const themeTargetDataset = themeTarget.dataset;
  const theme = localStorage.getItem('theme') || 'light';
  themeTargetDataset.theme = theme;
  if (theme === 'dark') themeSwitcher.checked = true;

  themeSwitcher.addEventListener('click', () => {
    if (themeTargetDataset.theme == 'light') {
      themeTargetDataset.theme = 'dark';
      localStorage.setItem('theme', 'dark');
      mapDiv.innerHTML = '';
      useMap();
    } else {
      themeTargetDataset.theme = 'light';
      localStorage.setItem('theme', 'light');
      mapDiv.innerHTML = '';
      useMap();
    }
  });
};
