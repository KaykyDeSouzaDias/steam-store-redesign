import { getSpecialOffers } from "../services/games-database-service.js";

const specialOffersData = await getSpecialOffers();

export function displaySpecialOffers() {
  let gameOffers = "";
  specialOffersData.map((offer) => {
    if (offer.id === 1) {
      gameOffers += `
        <div id="offer-${offer.id}" class="offer">
          <div class="offer-detail">
    
            <h3 class="offer-title">${offer.offerTitle}</h3>

            <div class="price-container">
              <div class="offer-sale-price">
                  <h3>${offer.dealOffer}%</h3>
              </div>
    
              <div class="price">
                  <h3 class="old-price">R$${offer.actual_price}</h3>
                  <h3 class="new-price">R$${offer.old_price}</h3>
              </div>
            </div>
    
          </div>
          <div class="offer-overlay">

            <video width="100%" height="250" class="offer-overlay-trailer" autoplay loop>
              <source src="../videos/special-offers/forza-horizon-5.mp4" type="video/mp4">
            </video>

            <div class="offer-header-overlay-content">

              <h3 class="overlay-offer-title">${offer.offerTitle}</h3>

              <div>
                <h1 class="offer-header-overlay-game-title">${offer.name}</h1>
                <div class="offer-header-overlay-game-keywords">
                    ${offer.gameKeywords
                      .map((key, index) => {
                        if (index === 2) {
                          return `
                            <p id="slider-keyword-1">${key}</p>
                        `;
                        } else if (index === 3) {
                          return ``;
                        } else {
                          return `
                            <p id="slider-keyword-1">${key}</p>
                            <i class="ph-circle-fill"></i>
                        `;
                        }
                      })
                      .join("")}
                </div>
              </div>

            </div>

            <div class="offer-detail-overlay">

              <button class="offer-buy">
                <i class="ph-shopping-bag-open-fill"></i>
              </button>
              <button class="offer-wishlist">
                <i class="ph-heart-fill"></i>
              </button>

            </div>
          </div>
        </div>
      `;
    } else {
      gameOffers += `
        <div id="offer-${offer.id}" class="offer">
          <div class="offer-detail">
    
            <h3 class="offer-title">${offer.offerTitle}</h3>

            <div class="price-container">
              <div class="offer-sale-price">
                  <h3>${offer.dealOffer}%</h3>
              </div>
    
              <div class="price">
                  <h3 class="old-price">R$${offer.actual_price}</h3>
                  <h3 class="new-price">R$${offer.old_price}</h3>
              </div>
            </div>
    
          </div>
        </div>
      `;
    }
  });

  showSpecialOffersCards(gameOffers);
}

function showSpecialOffersCards(offers) {
  const html = document.querySelector('[data-js="game-offers"]');
  return offers ? (html.innerHTML = offers) : (html.innerHTML = "");
}

export function setSpecialOffer_BackgroundImage() {
  specialOffersData.map((offer) => {
    document.getElementById(
      `offer-${offer.id}`
    ).style.backgroundImage = `url("${offer.image}")`;
  });
}
