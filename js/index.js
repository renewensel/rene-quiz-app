console.clear();
console.log("Hello from index.js");

const answerButtons = document.querySelectorAll('[data-js="answer-button"]');
const answerShowHide = document.querySelectorAll('[data-js="card__answer"]');

answerButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        answerShowHide[index].classList.toggle("hidden");
        if (answerShowHide[index].classList.contains("hidden")) {
            button.textContent = "Show Answer";
        } else {
            button.textContent = "Hide Answer";
        }
    });
});
