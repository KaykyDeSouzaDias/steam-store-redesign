import { getRecommended } from "../services/games-database-service.js";

const recommendedData = await getRecommended();

export function displayRecommended() {
  let recommendedGames = "";
  recommendedData.map((offer) => {
    if (offer.id === 1) {
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
          <div class="recommended-overlay">

            <div class="recommended-overlay-trailer">
              <div class="recommended-overlay-shadow"></div>
              <video width="100%" height="250" id="recommended-trailer" class="recommended-overlay-trailer" loop>
                <source src="/videos/recommended-games/the-witcher-3.mp4" type="video/mp4">
              </video>
            </div>

            <div class="recommended-header-overlay-content">

              <div>
                <h1 class="header-overlay-game-title">${offer.name}</h1>
                <div class="header-overlay-game-keywords">
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

              <i id="recommended-game-icon-review-01" class="ph-smiley"></i>

            </div>

            <div class="recommended-games-detail-overlay">

              <button class="recommended-buy">
                <i class="ph-shopping-bag-open-fill"></i>
              </button>
              <button class="recommended-wishlist">
                <i class="ph-heart-fill"></i>
              </button>

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
        </div>
      `;
    } else {
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
    }
  });

  showRecommendedCards(recommendedGames);
}

function showRecommendedCards(recommended) {
  const html = document.querySelector('[data-js="recommended-games"]');
  recommended ? (html.innerHTML = recommended) : (html.innerHTML = "");
}

export function setRecommended_BackgroundImage() {
  recommendedData.map((offer) => {
    document.getElementById(
      `recommended-${offer.id}`
    ).style.backgroundImage = `url("${offer.image}")`;
  });
}
