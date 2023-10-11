console.clear();
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> version2
console.log("Hello from index.js");

// query selection
// const answerButton = document.querySelector('[data-js="card__answer-button"]');
// const answerShowHide = document.querySelector(
//     '[data-js="card__answer-show-hide"]'
// );
// console.log(answerButton);
// console.log(answerShowHide);

// // function checkIfActive() {
// //     if (myElement.classList.contains("active")) {
// //       console.log("Class active has been added");
// //       // do something here if the class exists
// //     } else {
// //       console.log("Class active has not been added");
// //       // do something else here if the class does not exist
// //     }
// //   }

const buttons = document.querySelectorAll("button");
const buttonTexts = buttons.forEach((button) => button.textContent);
console.log(buttons);
console.log(buttonTexts);
/*    */

const bookmark = document.querySelector('[data-js="bookmark"]');
const answerButton = document.querySelector('[data-js="card__answer-button"]');
const answerToHide = document.querySelector(
    '[data-js="card__answer-show-hide"]'
);
console.log(bookmark, answerButton, answerToHide);

// click event for bookmark with arrow function:
bookmark.addEventListener("click", () => {
    console.log("bookmark eventlistener clicked");

    const currentBookmark = bookmark.src; // gives a longer path, https://'more'
    // cutting the string into just the filename
    console.log(bookmark.src);
    currentImageFilename =
        currentBookmark.split("/")[currentBookmark.split("/").length - 1];
    // gives a path which does not need to be cut
    const currentImageFilename = bookmark.getAttribute("src");

    if (currentImageFilename === "bookmark_filled.png") {
        bookmark.src = "./resources/bookmark_transparent.png";
    }
    if (currentImageFilename === "bookmark_transparent.png") {
        bookmark.src = "./resources/bookmark_filled.png";
    }
});

// click event for answer button, for hiding answer and change button text:
answerButton.addEventListener("click", () => {
    answerToHide.toggleAttribute("hidden");
    console.log("clicked");
    if (answerToHide.hidden == true) {
        answerButton.textContent = "Show Answer";
    }
    if (answerToHide.hidden == false) {
        answerButton.textContent = "Hide Answer";
    }
});
<<<<<<< HEAD
>>>>>>> version2
=======
>>>>>>> version2
