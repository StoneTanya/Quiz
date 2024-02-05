const askButton = document.getElementById('button_ask');
const answerButton = document.getElementById('button_answer');
const answerDiv = document.getElementById('answer');
const questionDiv = document.getElementById('question');

askButton.addEventListener('click', function(event) {
    event.preventDefault();
    fetch("https://opentdb.com/api.php?amount=10")
        .then(response => response.json())
        .then(result => {
        console.log(result);
        questionDiv.style.display = 'block';
        question.innerText = result.results[0].question;
        answer.innerHTML = result.results[0].correct_answer;
        answerDiv.style.display = 'none';
    })
    .catch(error => console.log(error));
})

answerButton.addEventListener('click', function(event) {
    event.preventDefault();
    answerDiv.style.display = 'block';
    // answerDiv.innerHTML = "";
})






