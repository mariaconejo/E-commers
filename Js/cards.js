const url = 'https://60414895f34cf600173c9bb5.mockapi.io/api/product';
const cardsContainer = document.getElementById('cards-scroll-js');

function createCards(product) {
  for (let i = 0; i < product.length; i += 1) {
    if (i === 4) break;
    const htmlCards = `
    <div class="product__card--js">
      <div class= "product__card--image--js">
        <img src="${product[i].large}" alt="${product[i].name}">
      </div>
      <div class="product__card--info--js">
        <p>${product[i].name}</p>
        <p>${product[i].price}</p>
      </div>
      <div class="product__card--details--js">
        <p>${product[i].description}</p>
      </div>
      <div class="product__card--button--js">
        <a href="#">Agregar al carrito</a>
      </div>
    </div>
    `;
    cardsContainer.innerHTML += htmlCards;
  }
}

fetch(url, {
  method: 'GET',
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    createCards(data);
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
