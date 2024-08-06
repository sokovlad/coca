export const scrollHeader = () => {
  const header = document.querySelector('.header');
  let lastScrollTop = 0;
  document.addEventListener('scroll', () => {
    // header.style.position = 'sticky';
    const scroll2 = document.documentElement.scrollTop;
    if (lastScrollTop < scroll2) {
      if (scroll2 > 50) header.style.top = -200 + 'px';
    } else {
      header.style.top = 0 + 'px';
    }
    lastScrollTop = scroll2;
  });
};
