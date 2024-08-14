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
    popularPrice.textContent = `$${priceList.popular.withSale}`;
    enterprisePrice.textContent = `$${priceList.enterprise.withSale}`;
  };

  const setPricesDefault = () => {
    starterPrice.textContent = `$${priceList.starter.default}`;
    popularPrice.textContent = `$${priceList.popular.default}`;
    enterprisePrice.textContent = `$${priceList.enterprise.default}`;
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
