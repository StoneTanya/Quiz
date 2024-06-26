const quizModal = document.querySelector(".quiz_modal");
const closeQuizModalElement = quizModal.querySelector(".quiz_modal__cancel");
const openQuizModalElement = document.querySelector(".quiz_modal__open");
const startPage = document.querySelector(".start-page");
const nextButton = document.querySelector(".quiz_modal__next-question");
import { isEscDown } from "./util";
import { bootstrap} from "./state";

const onDocumentKeydown = (evt) => {
  if (isEscDown(evt)) {
    evt.preventDefault();
    closeQuizModal();
  }
};

const openQuizModal = () => {
  bootstrap();
  nextButton.classList.add("hidden");
  document.body.classList.add("modal-open");
  quizModal.classList.remove("hidden");
  startPage.classList.add("hidden");

  document.addEventListener("keydown", onDocumentKeydown);
};

const closeQuizModal = () => {
  quizModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
  startPage.classList.remove("hidden");
  document.location.reload();
  document.removeEventListener("keydown", onDocumentKeydown);
};

closeQuizModalElement.addEventListener("click", closeQuizModal);
openQuizModalElement.addEventListener("click", openQuizModal);

export {closeQuizModal};