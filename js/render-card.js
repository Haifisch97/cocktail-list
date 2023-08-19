const cocktailData = [
    {
        name: 'Мартіні',
        img: 'https://ua.inshaker.com/uploads/cocktail/hires/24/1629735942-%D0%94%D1%80%D0%B0%D0%B8%CC%86_%D0%BC%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%B8.jpg',
        discription: "Додаємо усі інгредієнти до змішувальної склянки з льодом та добре змішуємо протягом 25-30 секунд. Проціджуємо коктейль за допомогою стрейнеру в охолоджений коктейльний келих (те ж сам ще келих Мартіні) Оздоблюємо коктейль однією або трьома оливками, або цедрою лимона.",
        ingredients: [
            {
                name: 'Джин',
                volume: '60 мл'
            },
            {
                name: 'Вермут сухий',
                volume: '15 мл'
            },
            {
                name: 'Лимонний сік',
                volume: '10 мл'
            },
            {
                name: 'Оливки',
                volume: '2-3 шт'
            },
        ]
    },
    {
        name: 'Бронкс',
        img: 'https://alcofan.com/wp-content/uploads/2012/12/bronks.png',
        discription: "Покласти в шейкер кубики льоду і решту інгредієнтів, кілька разів струсити, потім перелити в келих для коктейлів.",
        ingredients: [
            {
                name: 'Джин',
                volume: '20 мл'
            },
            {
                name: 'Вермут rosso',
                volume: '10 мл'
            },
            {
                name: 'Вермут сухий',
                volume: '10 мл'
            },
            {
                name: 'Апельсиновий сік',
                volume: '20 мл'
            },
        ]
    },
    {
        name: 'Леді Чаттерлей',
        img: 'https://alcofan.com/wp-content/uploads/2012/12/ledi-chatterlej.jpg',
        discription: "Після змішування в шейкері з льодом весь вміст вилити в келих на високій ніжці.",
        ingredients: [
            {
                name: 'Джин',
                volume: '30 мл'
            },
            {
                name: 'Апельсиновий лікер(тріпл сек)',
                volume: '10 мл'
            },
            {
                name: 'Вермут сухий',
                volume: '10 мл'
            },
            {
                name: 'Апельсиновий сік',
                volume: '10 мл'
            },
        ]
    },
    {
        name: 'Грейпфрут сплеш',
        img: 'https://alcofan.com/wp-content/uploads/2012/12/grejpfrut-splesh.png',
        discription: "Заповнити келих льодом, додати джин та грейпфрутовий сік, ретельно перемішати коктейльною ложечкою.",
        ingredients: [
            {
                name: 'Джин',
                volume: '20 мл'
            },
            {
                name: 'Подрібнений лід',
                volume: '200 грам'
            },
            {
                name: 'Грейпфрутовий сік',
                volume: '10 мл'
            },
        ]
    },
    {
        name: 'Яблучний мартіні',
        img: 'https://alcofan.com/wp-content/uploads/2012/12/yablochnyj-martini.png',
        discription: "Заповнити келих льодом, додати джин та грейпфрутовий сік, ретельно перемішати коктейльною ложечкою.",
        ingredients: [
            {
                name: 'Джин',
                volume: '15 мл'
            },
            {
                name: 'Вермут сухий',
                volume: '25 мл'
            },
            {
                name: 'Яблучний сік',
                volume: '40 мл'
            },
            {
                name: 'Скибочки яблука',
                volume: '2-3 шт'
            },
        ]
    },
    {
        name: 'Коктейль 001',
        img: 'https://alcofan.com/wp-content/uploads/2012/12/koktejl-001.jpg',
        discription: "Наповнити келих льодом, джином, сиропом та спрайтом. Пити через трубочку.",
        ingredients: [
            {
                name: 'Джин',
                volume: '40 мл'
            },
            {
                name: 'Спрайт',
                volume: '100 мл'
            },
            {
                name: 'Сироп смородина',
                volume: '20 мл'
            },

        ]
    },
];

renderCards(cocktailData);

function renderCards(cocktailData) {
    const cocktailCards = cocktailData.map(createCocktailCard);
    const cocktailCardsContainer = document.querySelector('.root .row');
    cocktailCardsContainer.append(...cocktailCards);
}

function createCocktailCard(cocktailData) {

    const { name, img, discription, ingredients } = cocktailData;

    const card = document.createElement('div');
    card.classList.add('col-12', 'col-md-6', 'col-xl-4');
    const innerHTML = `
  <div class="card">
      <div class="card-body">
          <h3 class="text-enter">${name}</h3>
          <div class="row">
              <div class="col-12 image-div text-center">
                  <img class="h-100 rounded-1"
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