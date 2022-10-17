import { getWatchGameTrailer } from "../services/games-database-service.js";

const gameTrailerData = await getWatchGameTrailer();

export function displayWatchGameTrailer() {
  let game = "";

  game += gameTrailerData
    .map((game) => {
      return `
    <div class="watch-game-trailers-main-detail">
        <div class="main-detail-content">
            <div>
                <img class="main-detail-image" src="./imgs/backgrounds/watch-game-trailer/bayonetta-2.jpg" alt="">
            </div>
            <div class="main-detail-text">
                <h1 class="popular-games-title">${game.name}</h1>
                <div class="popular-games-keywords">
                    ${game.gameKeywords
                      .map((key, index) => {
                        if (index === 3) {
                          return `
                            <p id="slider-keyword-1">${key}</p>
                        `;
                        } else {
                          return `
                            <p id="slider-keyword-1">${key}</p>
                            <i class="fa-solid fa-circle"></i>
                        `;
                        }
                      })
                      .join("")}
                </div>
                <div class="slider-bottom-content">
                    <button class="slider-buy">
                        <i class="fa-solid fa-basket-shopping"></i>
                    </button>
                    <button class="slider-wishlist">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="watch-game-trailers-detail">
        <div class="game-trailer-similar">
            <p>Reviews</p>
            <h3>${game.review}</h3>
        </div>
        <div class="game-trailer-similar">
            <p>Release Date</p>
            <h3>${game.releaseDate}</h3>
        </div>
        <div class="game-trailer-similar">
            <p>Developer</p>
            <h3>${game.developer}</h3>
        </div>
        <div class="game-trailer-similar">
            <p>Publisher</p>
            <h3>${game.publisher}</h3>
        </div>
        <div class="game-trailer-similar">
            <p>Platforms</p>
            <h3>${game.platforms.map((platform) => platform)}</h3>
        </div>

        <div class="details-buttons">
            <button class="more-like-this-button">
                More like this &nbsp; <span class="material-symbols-outlined">
                thumb_up
                </span>
            </button>
            <button class="next-button">
                <span class="material-symbols-outlined">
                    skip_next
                </span>
            </button>
        </div>
    </div>
        `;
    })
    .join("");

  showGameTrailerCard(game);
}

function showGameTrailerCard(game) {
  const html = document.querySelector('[data-js="game-trailer"]');
  game ? (html.innerHTML = game) : (html.innerHTML = "");
}
