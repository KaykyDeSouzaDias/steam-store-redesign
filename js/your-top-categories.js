import {
  getTopActionCategories,
  getTopFightingCategories,
  getTopOpenWorldCategories,
} from "../services/games-database-service.js";

const actionGamesData = await getTopActionCategories();
const fightingGamesData = await getTopFightingCategories();
const openWorldGamesData = await getTopOpenWorldCategories();

export function displayTopActionCategoriesGames() {
  let smallGames = "";

  let bigGame = `
    <div id="action-game-${
      actionGamesData[0].id
    }" class="big-top-categories-games">
      <div class="top-categories-game-details">
        <div class="category-type">
          <span class="material-symbols-outlined">
            ${actionGamesData[0].gameCategoryTypeIcon}
          </span>
          <p>${actionGamesData[0].gameCategoryType}</p>
        </div>

        <div class="top-categories-game-price">
          <h3 class="top-categories-game-normal-price">R$${
            actionGamesData[0].actual_price
          }</h3>
        </div>
      </div>
      <div class="recommended-overlay">

        <div class="recommended-overlay-trailer">
          <div class="recommended-overlay-shadow"></div>
          <video width="100%" height="100%" id="category-trailer" loop>
            <source src="/videos/your-top-categories/call-of-duty-vanguard.mp4" type="video/mp4">
          </video>
        </div>

        <div class="top-categories-header-overlay-content">

          <div>
            <h1 class="header-overlay-game-title">${
              actionGamesData[0].name
            }</h1>
            <div class="header-overlay-game-keywords">
                ${actionGamesData[0].gameKeywords
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

          <div class="category-overlay-game-icon-review">
            <i class="ph-smiley"></i>
            <span>Very Positive</span>
          </div>

        </div>

        <div class="top-categories-games-detail-overlay">

          <button class="recommended-buy">
            <i class="ph-shopping-bag-open-fill"></i>
          </button>
          <button class="recommended-wishlist">
            <i class="ph-heart-fill"></i>
          </button>

          ${
            actionGamesData[0].isInOffer
              ? `
              <div class="recommended-sale-price">
                <h3>${actionGamesData[0].dealOffer}%</h3>
              </div>

              <div class="recommended-games-price">
                <h3 class="recommended-old-price">R$${actionGamesData[0].old_price}</h3>
                <h3 class="recommended-new-price">R$${actionGamesData[0].actual_price}</h3>
              </div>
            `
              : `
                <div class="recommended-games-price">
                  <h3 class="recommended-normal-price">${
                    actionGamesData[0].actual_price === "Free"
                      ? `${actionGamesData[0].actual_price}`
                      : `R$${actionGamesData[0].actual_price}`
                  }</h3>
                </div>
              `
          }

        </div>
      </div>
    </div>
  `;

  smallGames += actionGamesData
    .map((action, id) => {
      if (id === 0) {
        return ``;
      } else {
        return `
          <div id="action-game-${action.id}" class="small-top-categories-games">
            <div class="top-categories-game-details">

            <div class="category-type">
              <span class="material-symbols-outlined">
                ${action.gameCategoryTypeIcon}
              </span>
              <p>${action.gameCategoryType}</p>
            </div>

            ${
              action.isInOffer
                ? `
                  <div class="top-categories-game-sale-price">
                    <h3>${action.dealOffer}%</h3>
                  </div>

                  <div class="top-categories-game-price">
                    <h3 class="top-categories-game-old-price">R$${action.old_price}</h3>
                    <h3 class="top-categories-game-new-price">R$${action.actual_price}</h3>
                  </div>
                `
                : `
                  <div class="top-categories-game-price">
                    <h3 class="top-categories-game-normal-price">${
                      action.actual_price === "Free"
                        ? `${action.actual_price}`
                        : `R$${action.actual_price}`
                    }</h3>
                  </div>
                `
            }
            </div>
          </div>
            `;
      }
    })
    .join("");

  showBigActionGameCard(bigGame);
  showSmallActionGamesCards(smallGames);
}

function showBigActionGameCard(games) {
  const html = document.querySelector('[data-js="big-action-game"]');
  games ? (html.innerHTML = games) : (html.innerHTML = "");
}
function showSmallActionGamesCards(games) {
  const html = document.querySelector('[data-js="small-action-games"]');
  games ? (html.innerHTML = games) : (html.innerHTML = "");
}
export function setActionGame_BackgroundImage() {
  actionGamesData.map((action) => {
    document.getElementById(
      `action-game-${action.id}`
    ).style.backgroundImage = `url("${action.image}")`;
  });
}

export function displayTopFightingCategoriesGames() {
  let smallGames = "";

  let bigGame = `
    <div id="fighting-game-${fightingGamesData[0].id}" class="big-top-categories-games">
      <div class="top-categories-game-details">
        <div class="category-type">
          <span class="material-symbols-outlined">
            ${fightingGamesData[0].gameCategoryTypeIcon}
          </span>
          <p>${fightingGamesData[0].gameCategoryType}</p>
        </div>

        <div class="top-categories-game-price">
          <h3 class="top-categories-game-normal-price">R$${fightingGamesData[0].actual_price}</h3>
        </div>
      </div>
    </div>
  `;

  smallGames += fightingGamesData
    .map((fighting, id) => {
      if (id === 0) {
        return ``;
      } else {
        return `
          <div id="fighting-game-${
            fighting.id
          }" class="small-top-categories-games">
            <div class="top-categories-game-details">

            <div class="category-type">
              <span class="material-symbols-outlined">
                ${fighting.gameCategoryTypeIcon}
              </span>
              <p>${fighting.gameCategoryType}</p>
            </div>

            ${
              fighting.isInOffer
                ? `
                  <div class="top-categories-game-sale-price">
                    <h3>${fighting.dealOffer}%</h3>
                  </div>

                  <div class="top-categories-game-price">
                    <h3 class="top-categories-game-old-price">R$${fighting.old_price}</h3>
                    <h3 class="top-categories-game-new-price">R$${fighting.actual_price}</h3>
                  </div>
                `
                : `
                  <div class="top-categories-game-price">
                    <h3 class="top-categories-game-normal-price">${
                      fighting.actual_price === "Free"
                        ? `${fighting.actual_price}`
                        : `R$${fighting.actual_price}`
                    }</h3>
                  </div>
                `
            }
            </div>
          </div>
            `;
      }
    })
    .join("");

  showBigFightingGameCard(bigGame);
  showSmallFightingGamesCards(smallGames);
}

function showBigFightingGameCard(games) {
  const html = document.querySelector('[data-js="big-fighting-game"]');
  games ? (html.innerHTML = games) : (html.innerHTML = "");
}
function showSmallFightingGamesCards(games) {
  const html = document.querySelector('[data-js="small-fighting-games"]');
  games ? (html.innerHTML = games) : (html.innerHTML = "");
}
export function setFightingGame_BackgroundImage() {
  fightingGamesData.map((fighting) => {
    document.getElementById(
      `fighting-game-${fighting.id}`
    ).style.backgroundImage = `url("${fighting.image}")`;
  });
}

export function displayTopOpenWorldCategoriesGames() {
  let smallGames = "";

  let bigGame = `
    <div id="open-world-game-${openWorldGamesData[0].id}" class="big-top-categories-games">
      <div class="top-categories-game-details">
        <div class="category-type">
          <span class="material-symbols-outlined">
            ${openWorldGamesData[0].gameCategoryTypeIcon}
          </span>
          <p>${openWorldGamesData[0].gameCategoryType}</p>
        </div>

        <div class="top-categories-game-price">
          <h3 class="top-categories-game-normal-price">R$${openWorldGamesData[0].actual_price}</h3>
        </div>
      </div>
    </div>
  `;

  smallGames += openWorldGamesData
    .map((openWorld, id) => {
      if (id === 0) {
        return ``;
      } else {
        return `
          <div id="open-world-game-${
            openWorld.id
          }" class="small-top-categories-games">
            <div class="top-categories-game-details">

              <div class="category-type">
                <span class="material-symbols-outlined">
                  ${openWorld.gameCategoryTypeIcon}
                </span>
                <p>${openWorld.gameCategoryType}</p>
              </div>

              ${
                openWorld.isInOffer
                  ? `
                    <div class="top-categories-game-sale-price">
                      <h3>${openWorld.dealOffer}%</h3>
                    </div>

                    <div class="top-categories-game-price">
                      <h3 class="top-categories-game-old-price">R$${openWorld.old_price}</h3>
                      <h3 class="top-categories-game-new-price">R$${openWorld.actual_price}</h3>
                    </div>
                  `
                  : `
                    <div class="top-categories-game-price">
                      <h3 class="top-categories-game-normal-price">${
                        openWorld.actual_price === "Free"
                          ? `${openWorld.actual_price}`
                          : `R$${openWorld.actual_price}`
                      }</h3>
                    </div>
                  `
              }
            </div>
          </div>
            `;
      }
    })
    .join("");

  showBigOpenWorldGameCard(bigGame);
  showSmallOpenWorldGamesCards(smallGames);
}

function showBigOpenWorldGameCard(games) {
  const html = document.querySelector('[data-js="big-open-world-game"]');
  games ? (html.innerHTML = games) : (html.innerHTML = "");
}
function showSmallOpenWorldGamesCards(games) {
  const html = document.querySelector('[data-js="small-open-world-games"]');
  games ? (html.innerHTML = games) : (html.innerHTML = "");
}
export function setOpenWorldGame_BackgroundImage() {
  openWorldGamesData.map((openWorld) => {
    document.getElementById(
      `open-world-game-${openWorld.id}`
    ).style.backgroundImage = `url("${openWorld.image}")`;
  });
}
