const askButton = document.getElementById("button_ask");
const answerButton = document.getElementById("button_answer");
const answerParagraph = document.getElementById("answer");
const questionParagraph = document.getElementById("question");
import { getData } from "./data";
// import showGetDataError from "./alerts";

let data = [];

const bootstrap = async () => {
  try {
    const result = await getData();
    data = result.results;
  } catch (error) {
    //   showGetDataError();
    console.error(error);
  }
};

bootstrap();

const onAskButtonClick = (questions) => {
  let questionNo = 0;
  questionParagraph.style.display = "block";
  questionParagraph.textContent = questions[questionNo].question;
  answerParagraph.textContent = questions[questionNo].correct_answer;
  answerParagraph.style.display = "none";
  questionNo++;
};

askButton.addEventListener("click", function (event) {
  event.preventDefault();
  onAskButtonClick(data);
  console.log(data);
});

answerButton.addEventListener("click", function (event) {
  event.preventDefault();
  answerParagraph.style.display = "block";
  //   answerDiv.innerHTML = "";
});
