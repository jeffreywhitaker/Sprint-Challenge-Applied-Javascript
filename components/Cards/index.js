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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then ( (response) => {
        console.log(response);
    });
//end

function cardMaker (article) {
    //create elements, add class and text content
    let newCard = document.createElement('div');
    newCard.classList.add('card');

    let cardHeadline = document.createElement('div');
    cardHeadline.classList.add('headline');
    cardHeadline.textContent = article.headline;

    let cardAuthorDiv = document.createElement('div');
    cardAuthorDiv.classList.add('author');

    let cardImgContainerDiv = document.createElement('div');
    cardImgContainerDiv.classList.add('img-container');
    cardImgContainerDiv.src = article.authorPhoto;

    let cardAuthorSpan = document.createElement('span');
    cardAuthorSpan.textContent = `By ${article.authorName}`;

    //nest the parts correctly
    newCard.appendChild(cardHeadline);
    newCard.appendChild(cardAuthorDiv);
    cardAuthorDiv.appendChild(cardImgContainerDiv);
    cardAuthorDiv.appendChild(cardAuthorSpan);

    //return finished card
    return newCard
}