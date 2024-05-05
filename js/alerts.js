import { closeQuizModal } from "./modal";

const ALERT_SHOW_TIME = 3000;

const showGettingError = () => {
  const errorTemplate = document.querySelector('#data-error').content;
  const errorInner = errorTemplate.cloneNode(true);
  const errorContent = errorInner.querySelector('.data-error');

  document.body.append(errorContent);

  setTimeout(() => {
    errorContent.remove();
  }, ALERT_SHOW_TIME);
  
  closeQuizModal();
};

const alertGettingDataProcess = () => {
  document.querySelector(".quiz_modal__question-counter").textContent = 'Получаю данные...'
};
export {showGettingError, alertGettingDataProcess};