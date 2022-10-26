import { getWatchGameTrailer } from "../services/games-database-service.js";

const gameTrailerData = await getWatchGameTrailer();

export function displayWatchGameTrailer() {
  let game = "";

  game += gameTrailerData
    .map((game) => {
      return `
        <div class="watch-game-trailers-main-detail-container">
            <div class="watch-game-trailers-main-detail">
                <div class="main-detail-content">
                    <div>
                        <img class="main-detail-image" src="./imgs/backgrounds/watch-game-trailer/bayonetta-2.jpg" alt="">
                    </div>
                    <div>
                        <h1 class="watch-game-trailer-game-title">${
                          game.name
                        }</h1>
                        <div class="watch-game-trailer-game-keywords">
                            ${game.gameKeywords
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
                        <div class="main-detail-store-content">
                            <button class="main-detail-game-buy">
                                <i class="ph-shopping-bag-open-fill"></i>
                            </button>
                            <button class="main-detail-game-wishlist">
                                <i class="ph-heart-fill"></i>
                            </button>
                            <div class="main-detail-game-price">
                            <h3 class="main-detail-game-normal-price">${
                              game.actual_price === "Free"
                                ? `${game.actual_price}`
                                : `R$${game.actual_price}`
                            }</h3>
                            </div>
                            <div class="main-detail-video-info">
                                <h3 class="video-time-and-icon">1:42</h3>
                                <i class="ph-speaker-high-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-detail-video-progress-background">
                <div class="main-detail-video-progress"></div>
            </div>
        </div>
        <div class="watch-game-trailers-detail">
            <div class="game-trailer-similar">
                <div>
                    <p>Reviews</p>
                    <h3>${game.review}</h3>
                </div>
                <div>
                    <p>Release Date</p>
                    <h3>${game.releaseDate}</h3>
                </div>
                <div>
                    <p>Developer</p>
                    <h3>${game.developer}</h3>
                </div>
                <div>
                    <p>Publisher</p>
                    <h3>${game.publisher}</h3>
                </div>
                <div>
                    <p>Platforms</p>
                    <h3>${game.platforms.map((platform) => platform)}</h3>
                </div>
            </div>

            <div class="details-buttons">
                <button class="more-like-this-button">
                    More like this &nbsp; <i class="ph-thumbs-up-fill"></i>
                </button>
                <button class="next-button">
                    <i class="ph-skip-forward-fill"></i>
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
