const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const repeatButton = document.getElementById('repeat-btn');
const questionContainerElement = document.getElementById('quiz-container');
const questionElement = document.getElementById('question-container');
const answerButtonsElement = document.getElementById('answer-buttons');
const commentsSection = document.getElementById('comments-section');
const commentsElement = document.getElementById('comments');
const commentNameElement = document.getElementById('comment-name');
const commentTextElement = document.getElementById('comment-text');
const submitCommentButton = document.getElementById('submit-comment');
const questionsLeftElement = document.getElementById('questions-left');
const timerElement = document.getElementById('timer');
const questionCountSlider = document.getElementById('question-count');
const questionCountValue = document.getElementById('question-count-value');

let shuffledQuestions, currentQuestionIndex, wrongQuestions;
let startTime, timerInterval;
let selectedQuestionCount;

document.addEventListener("DOMContentLoaded", function() {
    startButton.addEventListener('click', startGame);
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        setNextQuestion();
    });
    repeatButton.addEventListener('click', repeatWrongQuestions);
    submitCommentButton.addEventListener('click', submitComment);
    questionCountSlider.addEventListener('input', () => {
        questionCountValue.textContent = questionCountSlider.value;
    });
    console.log('Event listeners added');
});

function startGame() {
    console.log('Start button clicked');
    startButton.classList.add('hide');
    selectedQuestionCount = parseInt(questionCountSlider.value);
    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, selectedQuestionCount);
    currentQuestionIndex = 0;
    wrongQuestions = [];
    questionContainerElement.classList.remove('hide');
    commentsSection.classList.remove('hide');
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        updateQuestionsLeft();
    } else {
        showRepeatButton();
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        if (index === question.correct) {
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (!correct) {
        wrongQuestions.push(shuffledQuestions[currentQuestionIndex]);
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        showRepeatButton();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function updateQuestionsLeft() {
    questionsLeftElement.innerText = `Questions left: ${shuffledQuestions.length - currentQuestionIndex - 1}`;
}

function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    timerElement.innerText = `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function showRepeatButton() {
    repeatButton.classList.remove('hide');
    clearInterval(timerInterval);
}

function repeatWrongQuestions() {
    shuffledQuestions = wrongQuestions;
    currentQuestionIndex = 0;
    wrongQuestions = [];
    repeatButton.classList.add('hide');
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
    setNextQuestion();
}

function submitComment() {
    const name = commentNameElement.value.trim();
    const text = commentTextElement.value.trim();
    if (name && text) {
        const comment = {
            name,
            text,
            timestamp: Date.now(),
            thumbsUp: 0,
            thumbsDown: 0
        };
        database.ref('comments').push(comment);
        commentNameElement.value = '';
        commentTextElement.value = '';
    }
}

database.ref('comments').on('value', (snapshot) => {
    commentsElement.innerHTML = '';
    snapshot.forEach((childSnapshot) => {
        const comment = childSnapshot.val();
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <p><strong>${comment.name}</strong>: ${comment.text}</p>
            <button class="thumbs-up-btn" data-id="${childSnapshot.key}">👍 ${comment.thumbsUp}</button>
            <button class="thumbs-down-btn" data-id="${childSnapshot.key}">👎 ${comment.thumbsDown}</button>
        `;
        commentsElement.appendChild(commentElement);
    });
    document.querySelectorAll('.thumbs-up-btn').forEach(button => {
        button.addEventListener('click', () => updateThumbs(button.dataset.id, 'thumbsUp'));
    });
    document.querySelectorAll('.thumbs-down-btn').forEach(button => {
        button.addEventListener('click', () => updateThumbs(button.dataset.id, 'thumbsDown'));
    });
});

function updateThumbs(id, type) {
    const commentRef = database.ref('comments').child(id);
    commentRef.once('value', (snapshot) => {
        const comment = snapshot.val();
        comment[type]++;
        commentRef.update(comment);
    });
}

console.log('Script loaded successfully');
