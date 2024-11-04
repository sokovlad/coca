export const useForm = () => {
  const firstName = document.querySelector('[name = "first-name"]');
  const lastName = document.querySelector('[name = "last-name"]');
  const email = document.querySelector('[name = "email"]');
  const phone = document.querySelector('[name = "phone"]');
  const form = document.querySelector('.get-started__form');
  const formsItem = [firstName, lastName, phone, email];

  const createError = (item, msg = `Please enter your ${item.name}`) => {
    const errorMsg = document.createElement('div');
    errorMsg.classList.add('get-started__form-error');
    errorMsg.innerHTML = msg;
    item.classList.add('get-started__form-input--error');
    if (item == phone) {
      document
        .querySelector('.get-started__form-label--phone')
        .append(errorMsg);
    } else {
      item.parentNode.append(errorMsg);
    }
  };

  const removeError = (item) => {
    let errorMsg;
    item.classList.remove('get-started__form-input--error');
    if (item == phone) {
      errorMsg = document
        .querySelector('.get-started__form-label--phone')
        .querySelector('.get-started__form-error');
      if (errorMsg) errorMsg.remove();
    } else {
      errorMsg = item.parentNode.querySelector('.get-started__form-error');
      if (errorMsg) errorMsg.remove();
    }
  };

  const validate = (formItem) => {
    const regex1 = /^[A-Za-z]+$/;
    const regex2 = /^[+]|^[0-9]|[-()]+$/;
    let result = true;
    formsItem.forEach((item) => {
      removeError(item);
      if (item.value == '') {
        createError(item);
        result = false;
      } else {
        if (item == firstName || item == lastName) {
          if (!regex1.test(item.value)) {
            createError(item, 'Please use only letter');
            result = false;
          }
        }
        if (item == phone) {
          if (!regex2.test(item.value)) {
            createError(item, 'Please use only number');
            result = false;
          }
        }
      }
    });
    return result;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate(this)) {
      alert('Your application has been accepted successfully');
      formsItem.forEach((item) => {
        item.value = '';
      });
    }
  });
};
