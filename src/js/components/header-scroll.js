export const scrollHeader = () => {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');

  let lastScrollTop = 0;
  document.addEventListener('scroll', () => {
    const scroll2 = document.documentElement.scrollTop;
    if (scroll2 > 0 && scroll2 < 100) {
      header.classList.add('header--fixed');
      if (hero.classList.contains('hero--home')) {
        hero.style.paddingTop = `calc(var(--pt-hero-home) + var(--header-height))`;
      } else if (hero.classList.contains('hero--pricing')) {
        hero.style.paddingTop = `calc(var(--pt-hero-pricing) + var(--header-height))`;
      }
    }
    if (scroll2 === 0) {
      header.classList.remove('header--fixed');
      if (hero.classList.contains('hero--home')) {
        hero.style.paddingTop = 'var(--pt-hero-home)';
      } else if (hero.classList.contains('hero--pricing')) {
        hero.style.paddingTop = 'var(--pt-hero-pricing)';
      }
      header.classList.add('header--show');
    }
    if (lastScrollTop < scroll2 && scroll2 > 100) {
      header.classList.remove('header--show');
    } else {
      header.classList.add('header--show');
    }
    lastScrollTop = scroll2;
  });
};
