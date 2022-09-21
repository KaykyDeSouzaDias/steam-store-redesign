import { getSpecialOffers } from "../services/games-database-service.js";

const specialOffersData = await getSpecialOffers();

export function displaySpecialOffers() {
  let gameOffers = "";
  specialOffersData.map((offer) => {
    gameOffers += `
      <div id="offer-${offer.id}" class="offer">
        <div class="offer-detail">
  
            <h3 class="offer-title">${offer.offerTitle}</h3>
  
            <div class="offer-sale-price">
                <h3>${offer.dealOffer}%</h3>
            </div>
  
            <div class="price">
                <h3 class="old-price">R$${offer.actual_price}</h3>
                <h3 class="new-price">R$${offer.old_price}</h3>
            </div>
  
        </div>
      </div>
      `;
  });

  showSpecialOffersCards(gameOffers);
}

function showSpecialOffersCards(ms) {
  const ulsl = document.querySelector('[data-js="game-offers"]');
  return ms ? (ulsl.innerHTML = ms) : (ulsl.innerHTML = "");
}

export function setSpecialOffer_BackgroundImage() {
  specialOffersData.map((offer) => {
    document.getElementById(
      `offer-${offer.id}`
    ).style.backgroundImage = `url("${offer.image}")`;
  });
}
