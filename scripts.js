document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.menu__link').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

document.getElementById('menuIcon').addEventListener('click', function () {
    const popupMenu = document.getElementById('popupMenu');
    this.classList.toggle('open');
    popupMenu.classList.toggle('open');
});


document.querySelector('.btn__up').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Функция для создания карточек
function createCard(cardData) {
    return `
      <div class="content__body-card card">
        <div class="card__head ${cardData.ratingClass}">
          <p>${cardData.ratingText}</p>
        </div>

        <div class="card__body">
          <div class="card__body-head">
            <div class="ava">
              <img src="${cardData.imageUrl}" alt="image" />
            </div>
            <div class="name">
              <h3>${cardData.name}</h3>
              <div class="name__review">
                <img src="/img/rating-star.svg" alt="rating" />
                <p>${cardData.ratingValue} <span>${cardData.reviewsCount}</span></p>
              </div>
            </div>
          </div>
          <div class="card__body-info">
            <div class="info-table">
              <div class="info-row">
                <div class="info-cell label">Город:</div>
                <div class="info-cell value">${cardData.city}</div>
              </div>
              <div class="info-row">
                <div class="info-cell label">Адрес:</div>
                <div class="info-cell value">${cardData.address}</div>
              </div>
              <div class="info-row">
                <div class="info-cell label">Телефон:</div>
                <div class="info-cell value">
                  <a href="${cardData.phoneLink}">${cardData.phone}</a>
                </div>
              </div>
              <div class="info-row">
                <div class="info-cell label">Сайт:</div>
                <div class="info-cell value">
                  <a href="${cardData.website}" target="_blank">${cardData.websiteText}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="card__body-btns">
            <a href="#" class="btn btn-learn-more">Подробнее</a>
            <a href="#" class="btn btn-link">
              <img src="/img/link-icon.svg" alt="link icon" />
            </a>
          </div>
        </div>
      </div>
    `;
}

// Загрузка данных и добавление карточек на страницу
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('cards-container');
        data.forEach(cardData => {
            container.innerHTML += createCard(cardData);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));