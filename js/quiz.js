const answerTemplate = document.querySelector("#answers").content;
const quizArea = document.querySelector(".quiz_modal__preview");
const answersBox = quizArea.querySelector(".quiz_modal__answers");
const question = quizArea.querySelector(".quiz_modal__question");
const nextButton = quizArea.querySelector(".quiz_modal__next-question");
const questionCounterSpan = quizArea.querySelector(".quiz_modal__question-counter");
const playAgainButton = quizArea.querySelector(".quiz_modal__play-again");

import { bootstrap } from "./state";
import { decodeHtmlEntity, shuffle } from "./util";
import { data } from "./state";

let score = 0;
const MAX_SCORE = 10;
let currentQuestion = 0;

const finishQuiz = () => {
  answersBox.classList.add("hidden");
  nextButton.classList.add("hidden");
  questionCounterSpan.classList.add("hidden");
  question.innerHTML = `Правильных ответов: ${score} из ${MAX_SCORE}! <img src="./assets/img/cracker.png" alt="firework" width="40px"/>`;
  playAgainButton.classList.remove("hidden");
  question.classList.add("quiz_modal__result");

  playAgainButton.addEventListener("click", bootstrap);
};

const nextQuestion = () => {
  currentQuestion++;
  if (currentQuestion+1 > MAX_SCORE) {
    finishQuiz();
  } else {
    getQuiz(data);
  }
};

const getQuiz = (questions) => {
  nextButton.classList.add("hidden");
  questionCounterSpan.textContent = `${currentQuestion+1} / ${MAX_SCORE}`;
  clearAnswers();
  const results = questions[currentQuestion];
  const answers = [...results.incorrect_answers, results.correct_answer];
  const correctAnswer = results.correct_answer;
  
  shuffle(answers);

  question.textContent = decodeHtmlEntity(results.question);

  answers.forEach((answer) => {
    const element = answerTemplate.cloneNode(true);
    const answerButton = element.querySelector(".answer");
    answerButton.textContent = decodeHtmlEntity(answer);
    answersBox.append(answerButton);
    //для правильного ответа устанавливается атрибут data-correct="true"
    if (answerButton.textContent === decodeHtmlEntity(correctAnswer)) {
      answerButton.setAttribute("data-correct", "true");
    }
    answerButton.addEventListener("click", checkAnswer);
  });
};

const clearAnswers = () => {
  answersBox.querySelectorAll("button").forEach((item) => item.remove());
};

const checkAnswer = (evt) => {
  const answerSelected = evt.target.closest(".answer");
  //проверяем на нажатой кнопке атрибут correct
  if (evt.target.dataset.correct) {
    // если да, добавляем класс корректного ответа для стилизации
    answerSelected.classList.add("correct-answer");
    score++;
  } else {
    // если нет, добавляем класс некорректного ответа
    answerSelected.classList.add("incorrect-answer");
    // показать верный ответ, даже если выбран неверный
    let displayCorrectAnswer = document.querySelector("[data-correct='true']");
    displayCorrectAnswer.classList.add("correct-answer");
  }
  nextButton.classList.remove("hidden");
  nextButton.addEventListener("click", nextQuestion);
};

export { getQuiz };
