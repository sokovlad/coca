export const useBlogTabs = () => {
  const tabs = document.querySelectorAll('.hero__tabs-label');
  const cards = document.querySelectorAll('.hero__card');

  const hideCards = (content) => {
    switch (content) {
      case 'View all':
        cards.forEach((card) => {
          card.classList.remove('hero__card--hide');
        });
        break;
      case 'Design':
        cards.forEach((card) => {
          if (!card.classList.contains('hero__card--design')) {
            card.classList.add('hero__card--hide');
          }
        });
        break;
      case 'Articles':
        cards.forEach((card) => {
          if (!card.classList.contains('hero__card--articles')) {
            card.classList.add('hero__card--hide');
          }
        });
        break;
      case 'Product':
        cards.forEach((card) => {
          if (!card.classList.contains('hero__card--product')) {
            card.classList.add('hero__card--hide');
          }
        });
        break;
      case 'Software Development':
        cards.forEach((card) => {
          if (!card.classList.contains('hero__card--software')) {
            card.classList.add('hero__card--hide');
          }
        });
        break;
      case 'Customer Success':
        cards.forEach((card) => {
          if (!card.classList.contains('hero__card--customer')) {
            card.classList.add('hero__card--hide');
          }
        });
        break;
      default:
        break;
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      cards.forEach((card) => {
        card.classList.remove('hero__card--hide');
      });
      if (tab.children[0].checked) {
        hideCards(tab.children[1].textContent);
      }
    });
  });
};
