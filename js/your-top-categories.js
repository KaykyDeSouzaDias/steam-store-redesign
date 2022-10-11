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
    <div id="action-game-${actionGamesData[0].id}" class="big-top-categories-games">
      <div class="top-categories-game-details">
        <div class="category-type">
          <span class="material-symbols-outlined">
            ${actionGamesData[0].gameCategoryTypeIcon}
          </span>
          <p class="top-seller-txt">${actionGamesData[0].gameCategoryType}</p>
        </div>

        <div class="top-categories-game-price">
          <h3 class="top-categories-game-normal-price">R$${actionGamesData[0].actual_price}</h3>
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
              <p class="top-seller-txt">${action.gameCategoryType}</p>
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
                    <h3 class="top-categories-game-normal-price">R$${action.actual_price}</h3>
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
          <p class="top-seller-txt">${fightingGamesData[0].gameCategoryType}</p>
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
              <p class="top-seller-txt">${fighting.gameCategoryType}</p>
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
                    <h3 class="top-categories-game-normal-price">R$${fighting.actual_price}</h3>
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
          <p class="top-seller-txt">${openWorldGamesData[0].gameCategoryType}</p>
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
              <p class="top-seller-txt">${openWorld.gameCategoryType}</p>
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
                    <h3 class="top-categories-game-normal-price">R$${openWorld.actual_price}</h3>
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
