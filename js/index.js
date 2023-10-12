console.clear();
console.log("Hello from index.js");

/*******        Buttons for showing / hiding answers         ********/

// query buttons and answer cards
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

/*******        Bookmark select / deselect         ********/
const bookmarks = document.querySelectorAll('[data-js="bookmark');
console.log(bookmarks);

bookmarks.forEach((bookmark, index) => {
    bookmark.addEventListener("click", () => {
        bookmarks[index].classList.toggle("bookmark_active");
    });
});
