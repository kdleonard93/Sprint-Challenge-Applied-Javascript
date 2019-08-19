// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    let articleArray = response.data.articles;
    for (let article in articleArray) {
      articleArray[article].map(item => {
        cardsContainer.appendChild(newCards(item));
      });
    }
  });

function newCards(data) {
  let card = document.createElement("div");
  card.classList.add("card");

  let headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = data.headline;

  let author = document.createElement("div");
  author.classList.add("author");

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");

  let image = document.createElement("img");
  image.src = data.authorPhoto;

  let span = document.createElement("span");
  span.textContent = `By ${data.authorName}`;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imageContainer);
  imageContainer.appendChild(image);
  author.appendChild(span);

  return card;
}
