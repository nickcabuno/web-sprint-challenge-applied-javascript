// const cardCont = document.querySelector(".card-container")
import axios from 'axios'

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
  headlin.textContent = `${article.headline}`
  headlin.classList.add('headline')


  const author = document.createElement('div')
  author.classList.add('author')

  const imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')

  const authorPhot = document.createElement('img')
  authorPhot.src = `${article.authorPhoto}`

  const authorNam = document.createElement('span')
  authorNam.textContent = `By ${article.authorName}`

  cardd.appendChild(headlin)
  cardd.appendChild(author)
  author.appendChild(imgContainer)
  imgContainer.appendChild(authorPhot)
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

  const cardCont = document.querySelector(".cards-container")

  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  .then(res => {
    const javaData = res.data.articles.javascript;
    javaData.map((element) => {
      cardCont.append(Card(element));
    });

    const techData = res.data.articles.technology;
    techData.map((element) => {
      cardCont.append(Card(element));
    });

    const bootstrapData = res.data.articles.bootstrap;
    bootstrapData.map((element) => {
      cardCont.append(Card(element));
    });

    const jqueryData = res.data.articles.jquery;
    jqueryData.map((element) => {
      cardCont.append(Card(element));
    });

    const nodejsData = res.data.articles.node;
    nodejsData.map((element) => {
      cardCont.append(Card(element));
    });
  })
  .catch((err) => {
    console.log(err, "error");
  })
}



export { Card, cardAppender }
