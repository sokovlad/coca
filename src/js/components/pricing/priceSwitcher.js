export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');
  const priceList = {
    starter: {
      default: 120,
      withSale: 100,
    },
    popular: {
      default: 1600,
      withSale: 1400,
    },
    enterprise: {
      default: 2300,
      withSale: 2100,
    },
  };

  const setPricesWithSale = () => {
    starterPrice.textContent = `$${priceList.starter.withSale}`;
    starterPrice.nextElementSibling.textContent = '/ y r';
    popularPrice.textContent = `$${priceList.popular.withSale}`;
    popularPrice.nextElementSibling.textContent = '/ y r';
    enterprisePrice.textContent = `$${priceList.enterprise.withSale}`;
    enterprisePrice.nextElementSibling.textContent = '/ y r';
  };

  const setPricesDefault = () => {
    starterPrice.textContent = `$${priceList.starter.default}`;
    starterPrice.nextElementSibling.textContent = '/ mo';
    popularPrice.textContent = `$${priceList.popular.default}`;
    popularPrice.nextElementSibling.textContent = '/ mo';
    enterprisePrice.textContent = `$${priceList.enterprise.default}`;
    enterprisePrice.nextElementSibling.textContent = '/ mo';
  };

  switcher.checked = true;
  setPricesWithSale();

  switcher.addEventListener('change', () => {
    if (!switcher.checked) {
      setPricesDefault();
    } else {
      setPricesWithSale();
    }
  });
};
