import { getWhatsPopular } from "../services/games-database-service.js";

const whatsPopularData = await getWhatsPopular();

export function displayWhatsPopularGames() {
  let games = "";

  games += whatsPopularData
    .map((popular) => {
      return `
    <hr class="popular-games-divider">
    <li class="popular-games">
      <div>
        <img class="popular-games-image" src="${popular.image}" alt="">
      </div>
      <div class="popular-games-detail">
        <div>
          <h1 class="popular-games-title">${popular.name}</h1>
          <div class="popular-games-keywords">
            ${popular.gameKeywords
              .map((key, index) => {
                if (index === 3) {
                  return `
                  <p id="slider-keyword-1">${key}</p>
                `;
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
        ${
          popular.isInOffer
            ? `
            <div class="popular-games-offer">
              <div class="popular-sale-price">
                <h3>${popular.dealOffer}%</h3>
              </div>

              <div class="popular-games-offer-price">
                <h3 class="popular-old-price">R$${popular.old_price}</h3>
                <h3 class="popular-new-price">R$${popular.actual_price}</h3>
              </div>
            </div>
          `
            : `
          <div class="popular-games-price">
            <h3 class="popular-games-normal-price">${
              popular.actual_price === "Free"
                ? `${popular.actual_price}`
                : `R$${popular.actual_price}`
            }</h3>
          </div>
        `
        }
      </div>
    </li>
  `;
    })
    .join("");

  showPopularGamesCards(games);
}

function showPopularGamesCards(games) {
  const html = document.querySelector('[data-js="popular-games"]');
  games ? (html.innerHTML = games) : (html.innerHTML = "");
}
