const answerTemplate = document.querySelector("#answers").content;
const answersBox = document.querySelector(".answers");
const question = document.querySelector("#question");

import { getData } from "./data";
// import showGetDataError from "./alerts";

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
  question.textContent = results.question;
  
  answers.map((answer) => {
    const element = answerTemplate.cloneNode(true);
    const answerButton = element.querySelector(".answer");
    answerButton.textContent = answer;
    answersBox.append(answerButton);
  });

  questionNo++;
};

