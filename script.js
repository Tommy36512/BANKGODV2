const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const commentsSection = document.getElementById('comments-section');
const commentsDiv = document.getElementById('comments');
const submitCommentButton = document.getElementById('submit-comment');
const nameInput = document.getElementById('name');
const commentInput = document.getElementById('comment');
const questionCountSlider = document.getElementById('question-count');
const timerElement = document.getElementById('timer');

let currentQuestionIndex, shuffledQuestions, selectedQuestionCount;
let startTime, timerInterval;

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

submitCommentButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();
    if (name && comment) {
        addComment(name, comment, shuffledQuestions[currentQuestionIndex].question);
        nameInput.value = '';
        commentInput.value = '';
    }
});

function startQuiz() {
    selectedQuestionCount = parseInt(questionCountSlider.value);
    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, selectedQuestionCount);
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    startTimer();
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    displayComments(shuffledQuestions[currentQuestionIndex].question);
}

function showQuestion(question) {
    questionContainer.innerText = `${question.question} (${currentQuestionIndex + 1}/${selectedQuestionCount})`;
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        if (index === question.correct) {
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(selectedButton, correct);
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        nextButton.innerText = 'Restart';
        nextButton.classList.remove('hide');
        nextButton.addEventListener('click', () => location.reload());
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

function addComment(name, comment, question) {
    const commentsRef = firebase.database().ref('comments/' + encodeURIComponent(question));
    commentsRef.push({ name, comment, thumbsUp: 0, thumbsDown: 0 });
    displayComments(question);
}

function displayComments(question) {
    commentsDiv.innerHTML = '';
    const commentsRef = firebase.database().ref('comments/' + encodeURIComponent(question));
    commentsRef.on('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const commentData = childSnapshot.val();
            const commentDiv = document.createElement('div');
            commentDiv.innerHTML = `
                ${commentData.name}: ${commentData.comment}
                <div class="comment-actions">
                    <span class="thumbs-up" onclick="updateThumbs('${childSnapshot.key}', '${question}', 'up')">&#128077;</span>
                    <span class="counter">${commentData.thumbsUp}</span>
                    <span class="thumbs-down" onclick="updateThumbs('${childSnapshot.key}', '${question}', 'down')">&#128078;</span>
                    <span class="counter">${commentData.thumbsDown}</span>
                </div>
            `;
            commentsDiv.appendChild(commentDiv);
        });
    });
}

function updateThumbs(commentId, question, type) {
    const commentRef = firebase.database().ref('comments/' + encodeURIComponent(question) + '/' + commentId);
    commentRef.transaction((comment) => {
        if (comment) {
            if (type === 'up') {
                comment.thumbsUp++;
            } else if (type === 'down') {
                comment.thumbsDown++;
            }
        }
        return comment;
    });
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        timerElement.innerText = `Time: ${elapsedTime}s`;
    }, 1000);
}

questionCountSlider.addEventListener('input', startQuiz);

startQuiz();
