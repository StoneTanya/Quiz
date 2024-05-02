const answerTemplate = document.querySelector("#answers").content;
const answersBox = document.querySelector(".quiz_modal__answers");
const question = document.querySelector(".quiz_modal__question");
const nextQuestion = document.querySelector(".quiz_modal__next-question");

import { getData } from "./data";
import { decodeHtmlEntity, shuffle } from "./util";
import { showGettingError } from "./alerts";

let data = [];

const bootstrap = async () => {
  try {
    const result = await getData();
    data = result.results;
    getQuiz(data);
  } catch (error) {
    showGettingError();
  }
};

const getQuiz = (questions) => {
  clearAnswers();
  let questionNo = 0;
  const results = questions[questionNo];
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
    if (answerButton.innerHTML === decodeHtmlEntity(correctAnswer)) {
      answerButton.setAttribute("data-correct", "true");
    }
    answerButton.addEventListener("click", checkAnswer);
  });
  questionNo++;
};

const clearAnswers = () => {
  answersBox.querySelectorAll("button").forEach((item) => item.remove());
};

const checkAnswer = (evt) => {
  const answerSelected = evt.target.closest(".answer");
  //проверяем на нажатой кнопке атрибут correct
  if (evt.target.dataset.correct) {
    // если да, добавляем класс корректного ответа
    answerSelected.classList.add("correct-answer");
    //todo добавить вызов функции, подсчитывающей баллы за "раунд"
  } else {
    // если нет, добавляем класс некорректного ответа
    answerSelected.classList.add("incorrect-answer");
    // показать верный ответ, даже если выбран неверный
    let displayCorrectAnswer = document.querySelector("[data-correct='true']");
    displayCorrectAnswer.classList.add("correct-answer");
  }
};

nextQuestion.addEventListener("click", bootstrap);

export { bootstrap };
