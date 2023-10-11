console.clear();
console.log("Hello from form.js");

/* function for counting characters in textarea */

function updateCharCount(textArea, charCount) {
    const maxLength = parseInt(textArea.getAttribute("maxlength"));
    const currentLength = textArea.value.length;
    const remaining = maxLength - currentLength;
    charCount.textContent =
        remaining + " character" + (remaining !== 1 ? "s" : "") + " remaining";
}

const textAreas = document.querySelectorAll(".charCountTextarea");
const charCounts = document.querySelectorAll(".charCount");

textAreas.forEach((textArea, index) => {
    textArea.addEventListener("input", () => {
        updateCharCount(textArea, charCounts[index]);
    });
});

/* ******************************************* */

// query <main>
const createCardPlace = document.querySelector("main");

// create section.card > div.card__bookmark, and append them
const section = document.createElement("section");
section.classList.add("card");
createCardPlace.append(section);

const div = document.createElement("div");
div.classList.add("card__bookmark");
section.append(div);

// a href
const href = document.createElement("a");
div.append(href);

// Bookmark Image
const imgBookmark = document.createElement("img");
imgBookmark.src = "../resources/add.png";
imgBookmark.setAttribute("alt", "bookmark");
imgBookmark.setAttribute("data-js", "card__bookmark");
href.append(imgBookmark);

// create two <p> with question, and answer, and button
const question = document.createElement("p");
question.classList.add("card__question");
// question.textContent = "the question";

const button = document.createElement("button");
button.classList.add("card__answer-button");
button.textContent = "Show Answer";
button.setAttribute("data-js", "card__answer-button");

const answer = document.createElement("p");
answer.classList.add("card__answer");
answer.textContent = "the answer";

section.append(question, button, answer);

// create tags ul>li
const tags = document.createElement("ul");
const tagsLi = document.createElement("li");

tags.classList.add("card__tag-container");
tagsLi.classList.add("card__tag-container__tags");

tagsLi.textContent = "test tag";

section.append(tags);
tags.append(tagsLi);

const form = document.querySelector("form");

form.addEventListener("click", (event) => {
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
});
