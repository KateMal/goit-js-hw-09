const formData = {
  email: '',
  message: '',
};
const elForm = document.querySelector('.feedback-form');
elForm.addEventListener('input', onFormInput);
elForm.addEventListener('submit', onFormSubmit);
function onFormInput(evt) {
  // console.log(evt.target.name);
  // console.log(evt.target.value);
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  if (formData.email === '' || formData.message === '') {
    alert('Please fill in all the fields!');
    return;
  }
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
}
populateForm();
function populateForm() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    elForm.email.value = formData.email;
    elForm.message.value = formData.message;
  }
}
