const cardCont = document.querySelector(".card-container")


function Card(article) {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardd = document.createElement('div')
  cardd.classList.add('card')
  const headlin = document.createElement('div')
  headlin.textContent = `${headline}`
  headlin.classList.add('headline')
  const author = document.createElement('div')
  author.classList.add('author')
  const imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')
  const authorPhot = document.createElement('img')
  authorPhot.scr = `${authorPhoto}`
  const authorNam = document.createElement('span')
  authorNam.textContent = `By ${authorName}`

  cardd.appendChild(headlin)
  cardd.appendChild(author)
  author.appendChild(imgContainer)
  author.appendChild(authorPhot)
  author.appendChild(authorNam)

  return cardd
}

function cardAppender(selector) {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  .then((response) => {
    const articles = response.data.articles;

    articles.forEach((article) => {
      const cardd = Card({article});
      cardCont.append(cardd);
    });

  })
  .catch((err) => {
    console.log(err, "error");
  })
}



export { Card, cardAppender }
