import { getValueGamesAndHotDeals } from "../services/games-database-service.js";

const hotDealsData = await getValueGamesAndHotDeals();

export function displayValueGamesAndHotDeals() {
  let games = "";
  games += hotDealsData
    .map((deal) => {
      return `
        <div id="hot-deals-${deal.id}" class="deal-games">
            <div class="deal-games-detail">
  
                ${
                  deal.review === ""
                    ? `
                    <div class="category-type">
                        <span class="material-symbols-outlined">
                            ${deal.gameCategoryTypeIcon}
                        </span>
                        <p class="top-seller-txt">${deal.gameCategoryType}</p>
                    </div>
                    `
                    : `
                    <div class="category-type">
                        <span class="material-symbols-outlined">
                            ${deal.reviewIcon}
                        </span>
                        <p class="top-seller-txt">${deal.review}</p>
                    </div>
                    `
                }
    
                ${
                  deal.isInOffer
                    ? `
                    <div class="deal-sale-price">
                    <h3>${deal.dealOffer}%</h3>
                    </div>

                    <div class="deal-games-price">
                    <h3 class="deal-old-price">R$${deal.old_price}</h3>
                    <h3 class="deal-new-price">R$${deal.actual_price}</h3>
                    </div>
                `
                    : `
                    <div class="deal-games-price">
                        <h3 class="deal-normal-price">${
                          deal.actual_price === "Free"
                            ? `${deal.actual_price}`
                            : `R$${deal.actual_price}`
                        }</h3>
                    </div>
                    `
                }
  
            </div>
        </div>
        `;
    })
    .join("");

  showHotDealsCards(games);
}

function showHotDealsCards(deal) {
  const html = document.querySelector(
    '[data-js="value-games-and-hot-deals-games"]'
  );
  deal ? (html.innerHTML = deal) : (html.innerHTML = "");
}

export function setHotDeals_BackgroundImage() {
  hotDealsData.map((deal) => {
    document.getElementById(
      `hot-deals-${deal.id}`
    ).style.backgroundImage = `url("${deal.image}")`;
  });
}
