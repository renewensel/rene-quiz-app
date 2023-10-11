console.clear();
console.log("Hello from form.js");

/* ++++++++++++++++ put this function in another js-file +++++++++++++++ */

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

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
question.textContent = "the question";

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

// createCardPlace.append(section);

/* doing it step by step - template literates would be smarter */
/*
<section class="card">
                <div class="card__bookmark">
                    <a href=""
                        ><img alt="bookmark" data-js="card__bookmark"
                    /></a>
                </div>
                <p class="card__question">What is best in life?</p>
                <button
                    class="card__answer-button"
                    data-js="card__answer-button"
                >
                    Show Answer
                </button>
                <p hidden class="card__answer" data-js="card__answer-show-hide">
                    Crush your enemies See them driven before you And hear the
                    lamentation of their women.
                </p>
                <ul class="card__tag-container">
                    <li class="card__tag-container__tags">HTML</li>
                    <li class="card__tag-container__tags">CSS</li>
                    <li class="card__tag-container__tags">Javascript</li>
                </ul>
            </section>
            */
