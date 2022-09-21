import { getRecommended } from "../services/games-database-service.js";

const recommendedData = await getRecommended();

export function displayRecommended() {
  let recommendedGames = "";
  recommendedData.map((offer) => {
    recommendedGames += `
        <div id="recommended-${offer.id}" class="recommended-games">
          <div class="recommended-games-detail">
  
              <div class="recommended-games-similar">
                  <p>Similar to</p>
                  <h3>${offer.similarTo}</h3>
              </div>
  
              ${
                offer.isInOffer
                  ? `
                  <div class="recommended-sale-price">
                    <h3>${offer.dealOffer}%</h3>
                  </div>
  
                  <div class="recommended-games-price">
                    <h3 class="recommended-old-price">R$${offer.old_price}</h3>
                    <h3 class="recommended-new-price">R$${offer.actual_price}</h3>
                  </div>
                `
                  : `
                    <div class="recommended-games-price">
                      <h3 class="recommended-normal-price">${
                        offer.actual_price === "Free"
                          ? `${offer.actual_price}`
                          : `R$${offer.actual_price}`
                      }</h3>
                    </div>
                  `
              }
  
          </div>
        </div>
        `;
  });

  showRecommendedCards(recommendedGames);
}

displayRecommended();

function showRecommendedCards(ms) {
  const ulsl = document.querySelector('[data-js="recommended-games"]');
  ms ? (ulsl.innerHTML = ms) : (ulsl.innerHTML = "");
}

export function setRecommended_BackgroundImage() {
  recommendedData.map((offer) => {
    document.getElementById(
      `recommended-${offer.id}`
    ).style.backgroundImage = `url("${offer.image}")`;
  });
}

setRecommended_BackgroundImage();
