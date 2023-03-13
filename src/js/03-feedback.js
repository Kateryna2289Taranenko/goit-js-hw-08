import throttle from 'lodash.throttle';
const feedbackFormEl = document.querySelector('.feedback-form');
const FEEDBACK_FORM_KEY = 'feedback-form-state';
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
  localStorage.setItem(FEEDBACK_FORM_KEY, inputValue);
}

const feedbackState = localStorage.getItem(FEEDBACK_FORM_KEY);
if (feedbackState) {
  const feedbackStateData = JSON.parse(feedbackState);
  feedbackStateData.email
    ? (feedbackFormEl.email.value = feedbackStateData.email)
    : (feedbackFormEl.email.value = '');
  feedbackStateData.message
    ? (feedbackFormEl.message.value = feedbackStateData.message)
    : (feedbackFormEl.message.value = '');
}
feedbackFormEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_KEY);
  console.log(formData);
}
