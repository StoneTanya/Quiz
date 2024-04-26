const answerTemplate = document.querySelector("#answers").content;
const answersBox = document.querySelector(".quiz_modal__answers");
const question = document.querySelector(".quiz_modal__question");

import { getData } from "./data";
import {decodeHtmlEntity} from "./util";

// const string = "In &quot;Future Diary&quot;, what is the name of Yuno Gasai&#039;s Phone Diary?";
// import showGetDataError from "./alerts";
// console.log(decodeHtmlEntity(string));

let data = [];

const bootstrap = async () => {
  try {
    const result = await getData();
    data = result.results;
    getQuiz(data);
  } catch (error) {
    //   showGetDataError();
    console.error(error);
  }
};

bootstrap();

const getQuiz = (questions) => {
  let questionNo = 0;
  const results = questions[questionNo];
  const answers = [...results.incorrect_answers, results.correct_answer];
  question.textContent = decodeHtmlEntity(results.question);
  
  answers.map((answer) => {
    const element = answerTemplate.cloneNode(true);
    const answerButton = element.querySelector(".answer");
    answerButton.textContent = answer;
    answersBox.append(answerButton);
  });
  questionNo++;
};


