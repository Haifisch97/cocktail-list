
const data = await getCocktailList();
renderCards(data);


// const btn = document.querySelector('#add-cocktail');
// btn.addEventListener('click', () => {
//     console.log('click');
//     cocktailData.forEach((cocktail) => {
//         sendCocktail(cocktail);
//     });
// });

function renderCards(cocktailData) {
    const cocktailCards = cocktailData.map(createCocktailCard);
    const cocktailCardsContainer = document.querySelector('.root .row');
    cocktailCardsContainer.append(...cocktailCards);
}

function createCocktailCard(cocktailData) {

    const { name, img, discription, ingredients } = cocktailData;

    const card = document.createElement('div');
    card.classList.add('col-12', 'col-md-6', 'col-xl-4', 'd-flex');
    const innerHTML = `
  <div class="card">
      <div class="card-body">
          <h3 class="text-enter">${name}</h3>
          <div class="row">
              <div class="col-12 image-div text-center">
                  <img class="h-100 w-100 rounded-1 object-fit-contain"
                      src="${img}"
                      alt="">
              </div>
          </div>
          <div class="mt-3">
              <ul class="list-group list-group-flush">
                    ${ingredients.map(createIngredientListItem).join('')}
              </ul>
          </div>
          <div>
          <h5>Приготування:</h5>
          <p>
            ${discription}
          </p>
      </div>
      </div>
  </div>`;
    card.innerHTML = innerHTML;
    return card;
}

function createIngredientListItem(ingredientData) {

    const { name, volume } = ingredientData;
    const li = `
    <li class="list-group-item d-flex justify-content-between">
        <span>${name}</span>
        <span>${volume}</span>
    </li>
    `
    return li;
}

async function getCocktailList() {
    try {
        const response = await fetch('http://195.189.226.106:3000/api/data');
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

function sendCocktail(data) {
    try {
    fetch('http://195.189.226.106:3000/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    } catch (error) {
        console.log(error);
    }
}