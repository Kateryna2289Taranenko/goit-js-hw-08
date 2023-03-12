import throttle from 'lodash.throttle';
const feedbackFormEl = document.querySelector('.feedback-form');

const formData = {};

feedbackFormEl.addEventListener(
  'input',
  throttle(evt => {
    formData[evt.target.name] = evt.target.value;
    onInputValue();
  }, 500)
);
function onInputValue() {
  const inputValue = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', inputValue);
}

const feedbackState = localStorage.getItem('feedback-form-state')
if (feedbackState) {
    const feedbackStateData = JSON.parse(feedbackState)
    feedbackFormEl.email.value = feedbackStateData.email
    feedbackFormEl.message.value = feedbackStateData.message
}
feedbackFormEl.addEventListener('submit', onFormSubmit)
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state')
    console.log({formData});
}