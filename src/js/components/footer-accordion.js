export const useFooterAccordion = () => {
  const footerItems = document.querySelectorAll('.footer__item-title');
  const breakpoint = window.matchMedia('(max-width: 576px)');

  const initAccordion = () => {
    footerItems.forEach((item) => {
      const accordionList = item.nextElementSibling;
      if (!item.classList.contains('footer__accordion--opened')) {
        accordionList.style.maxHeight = 0;
      }
    });
  };

  const openAccordion = (item, accordion) => {
    item.classList.toggle('footer__accordion--opened');
    if (item.classList.contains('footer__accordion--opened')) {
      accordion.classList.add('footer__sublist--show');
      accordion.style.maxHeight = accordion.scrollHeight + 20 + 'px';
    } else {
      accordion.classList.remove('footer__sublist--show');
      accordion.style.maxHeight = 0;
    }
  };

  const closeAccordion = (target) => {
    footerItems.forEach((item) => {
      if (item !== target) {
        const accordionList = item.nextElementSibling;
        accordionList.classList.remove('footer__sublist--show');
        accordionList.style.maxHeight = 0;
        item.classList.remove('footer__accordion--opened');
      }
    });
  };

  const destroyAccordion = () => {
    footerItems.forEach((item) => {
      const accordionList = item.nextElementSibling;
      accordionList.style.maxHeight = 'none';
      accordionList.classList.remove('footer__sublist--show');
      item.classList.remove('footer__accordion--opened');
    });
  };

  footerItems.forEach((item) => {
    const accordionList = item.nextElementSibling;
    if (!item.classList.contains('footer__accordion--opened')) {
      accordionList.style.maxHeight = 0;
    }
    item.addEventListener('click', () => {
      if (!breakpoint.matches) return;
      closeAccordion(item);
      openAccordion(item, accordionList);
    });
  });

  const checker = () => {
    if (breakpoint.matches) {
      return initAccordion();
    } else {
      return destroyAccordion();
    }
  };

  breakpoint.addEventListener('change', checker);
  checker();
};
