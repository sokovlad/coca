import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export const usePhone = () => {
  const input = document.querySelector('#phone');
  intlTelInput(input, {
    initialCountry: 'auto',
    geoIpLookup: (callback) => {
      fetch('https://ipapi.co/json')
        .then((res) => res.json())
        .then((data) => callback(data.country_code))
        .catch(() => callback('us'));
    },
    loadUtilsOnInit: () => import('intl-tel-input/utils'),
  });
};
