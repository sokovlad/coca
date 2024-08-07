export const scrollHeader = () => {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  let lastScrollTop = 0;
  document.addEventListener('scroll', () => {
    const scroll2 = document.documentElement.scrollTop;
    if (scroll2 > 0 && scroll2 < 100) {
      header.classList.add('header--fixed');
      hero.style.paddingTop = 83 + 110 + 'px';
    }
    if (scroll2 === 0) {
      header.classList.remove('header--fixed');
      hero.style.paddingTop = 83 + 'px';
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
