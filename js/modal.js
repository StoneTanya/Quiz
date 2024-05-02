const quizModal = document.querySelector(".quiz_modal");
const closeQuizModalElement = document.querySelector(".quiz_modal__cancel");
const openQuizModalElement = document.querySelector(".quiz_modal__open");
const startPage = document.querySelector(".start-page");

import { bootstrap } from "./quiz";
import { isEscDown } from "./util";

const onDocumentKeydown = (evt) => {
  if (isEscDown(evt)) {
    evt.preventDefault();
    closeQuizModal();
  }
};

const openQuizModal = () => {
  quizModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  startPage.classList.add("hidden");
  document.addEventListener("keydown", onDocumentKeydown);

  bootstrap();
};

function closeQuizModal() {
  quizModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
  startPage.classList.remove("hidden");

  document.removeEventListener("keydown", onDocumentKeydown);
}

closeQuizModalElement.addEventListener("click", closeQuizModal);
openQuizModalElement.addEventListener("click", openQuizModal);


