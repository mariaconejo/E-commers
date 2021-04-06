const url = 'https://60414895f34cf600173c9bb5.mockapi.io/api/product';
const cardsContainer = document.getElementById('cards-shop');
<<<<<<< HEAD
const optionsCategories = document.querySelector('#categories--js');
const optionsPrices = document.querySelector('#prices--js');

function createCards(product) {
  cardsContainer.innerHTML = '';
  for (let i = 0; i < product.length; i += 1) {
    const htmlCards = `
    <div class="product__card--container" data-price = "${product[i].price}">
      <div class="product__card--shop">
        <div class= "product__card--medium--image">
          <img src="${product[i].medium}" alt="">
        </div>
        <div class= "product__card--large--image">
          <img src="${product[i].large}" alt="">
        </div>
        <div class="product__card--info--shop">
        <p class="product__card--name--shop">${product[i].name}</p>
        <p class="product__card--price--shop">¢${product[i].price}</p>
        </div>
        <div class="product__card--button--shop">
          <a class="anchor__button anchor__button--secondary anchor__button--small" href="#">Agregar al carrito</a>
        </div>
      </div>
    </div>
    `;
    cardsContainer.innerHTML += htmlCards;
  }
}
=======
const checkboxes = document.querySelectorAll(".filter__item--content input[type=checkbox]");
>>>>>>> modal

function filterbyCategories(data) {
  const listaProductos = data;
  createCards(listaProductos);
  optionsCategories.addEventListener('click', (e) => {
    if (e.target.value === 'Todos') {
      createCards(listaProductos);
    } else {
      const filteredContent = listaProductos.filter((Producto) => Producto.category.includes(`${e.target.value}`));
      if (filteredContent) {
        createCards(filteredContent);
      }
    }
  });
}

optionsPrices.addEventListener('change', () =>{
  let priceArray = document.querySelectorAll('.product__card--container');
  let newArray = [].slice.call(priceArray); // Esto sirve para pasar un nodeList a un array, a un nodeList no se le puede aplicar un sort es por eso que se hace un array
  if(optionsPrices.value === 'high'){
    newArray = newArray.sort((a, b) => b.dataset.price - a.dataset.price);
    newArray.forEach(priceCard => {
      cardsContainer.appendChild(priceCard);
    });
  }else{
    newArray = newArray.sort((a, b) => a.dataset.price - b.dataset.price);
    newArray.forEach(priceCard => {
      cardsContainer.appendChild(priceCard);
    });
  }
})
<<<<<<< HEAD

function ApiData() {
  fetch(url, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      filterbyCategories(data);
      filterByPrices(data);
    })
    .catch(() => {
    });
}
ApiData();

=======
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const listaProductos = data;
    if(checkboxes.checked){
      const filteredContent = listaProductos.filter((Producto) => Producto.category.toLowerCase().includes(`${checkboxes.value}`));
      if (filteredContent) {
        createCards(filteredContent);
      }
    }else{
      createCards(data);
    }
  })
  .catch((err) => {
    console.error(err);
  });

  function createCards(product) {
    for (let i = 0; i < 10; i += 1) {
      const htmlCards = `
      <div data-id="${product[i].id}" class="product__card--container">
        <div class="product__card--shop">
          <div class= "product__card--medium--image">
            <img src="${product[i].medium}" alt="">
          </div>
          <div class= "product__card--large--image">
            <img src="${product[i].large}" alt="">
          </div>
          <div class="product__card--info--shop">
          <p class="product__card--name--shop">${product[i].name}</p>
          <p class="product__card--price--shop">¢${product[i].price}</p>
          </div>
          <div class="product__card--button--shop">
            <a data-id="${product[i].id}" class="anchor__button anchor__button--secondary anchor__button--small .js-add__drawer'" href="#">Agregar al carrito</a>
          </div>
        </div>
      </div>

      `;
      cardsContainer.innerHTML += htmlCards;
    }
  }
>>>>>>> modal
