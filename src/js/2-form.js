const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email ?? '';
  formData.message = parsedData.message ?? '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  const key = event.target.name;
  const value = event.target.value.trim();

  formData[key] = value;

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  formData.email = '';
  formData.message = '';
  form.reset();
});
