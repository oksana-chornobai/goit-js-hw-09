const formEl = document.querySelector('.feedback-form');

let formData = {
    email: "",
    message: ""
}


formEl.addEventListener('input', e => {
     console.log('input event:', e.target.name, e.target.value);
  formData[e.target.name] = e.target.value; 
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

window.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    formData = JSON.parse(savedData);
    formEl.elements.email.value = formData.email;
    formEl.elements.message.value = formData.message;
  }
});

formEl.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData = { email: "", message: "" };
  formEl.reset();
});
