import { closeQuizModal } from "./modal";

const ALERT_SHOW_TIME = 5000;

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

export {showGettingError};