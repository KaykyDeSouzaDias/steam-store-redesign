import { getSpecialOffers } from "../services/games-database-service.js";

const specialOffersData = await getSpecialOffers();

function displayWhatsPopularGames() {
  let games = "";
  for (let i = 0; i <= 7; i++) {
    if (i === 0) {
      games += `
        <div class="popular-games">
          <div>
            <img class="popular-games-image" src="/imgs/backgrounds/whats-popular_promoted/popular_${i}.png" alt="">
          </div>
          <div>
            <h1 class="popular-games-title">${PopularGameNames[i]}</h1>
            <div class="popular-games-keywords">
              <p id="slider-keyword-1">You&nbsp;Decide</p>
              <i class="fa-solid fa-circle"></i>
              <p id="slider-keyword-2">Terror</p>
              <i class="fa-solid fa-circle"></i>
              <p id="slider-keyword-3">Adventure</p>
              <i class="fa-solid fa-circle"></i>
              <p id="slider-keyword-4">Zombies</p>
            </div>
          </div>
  
          <div class="recommended-games-price">
            <h3 class="recommended-normal-price">Free</h3>
          </div>
        </div>
        `;
    } else if (i === 1 || i === 6) {
      games += `
        <hr class="popular-games-divider">
          <li class="popular-games">
            <div>
              <img class="popular-games-image" src="/imgs/backgrounds/whats-popular_promoted/popular_${i}.png" alt="">
            </div>
            <div>
              <h1 class="popular-games-title">${PopularGameNames[i]}</h1>
              <div class="popular-games-keywords">
                <p id="slider-keyword-1">You&nbsp;Decide</p>
                <i class="fa-solid fa-circle"></i>
                <p id="slider-keyword-2">Terror</p>
                <i class="fa-solid fa-circle"></i>
                <p id="slider-keyword-3">Adventure</p>
                <i class="fa-solid fa-circle"></i>
                <p id="slider-keyword-4">Zombies</p>
              </div>
            </div>
            <div class="recommended-sale-price">
              <h3>-8%</h3>
            </div>
  
            <div class="recommended-games-price">
                <h3 class="recommended-old-price">$49.99</h3>
                <h3 class="recommended-new-price">$24.99</h3>
            </div>
          </li>
        `;
    } else {
      games += `
        <hr class="popular-games-divider">
        <li class="popular-games">
          <div>
            <img class="popular-games-image" src="/imgs/backgrounds/whats-popular_promoted/popular_${i}.png" alt="">
          </div>
          <div>
            <h1 class="popular-games-title">${PopularGameNames[i]}</h1>
            <div class="popular-games-keywords">
              <p id="slider-keyword-1">You&nbsp;Decide</p>
              <i class="fa-solid fa-circle"></i>
              <p id="slider-keyword-2">Terror</p>
              <i class="fa-solid fa-circle"></i>
              <p id="slider-keyword-3">Adventure</p>
              <i class="fa-solid fa-circle"></i>
              <p id="slider-keyword-4">Zombies</p>
            </div>
          </div>
          <div class="popular-games-price">
              <h3 class="popular-games-normal-price">$24.99</h3>
          </div>
        </li>
      `;
    }
  }

  showPopularGamesCards(games);
}

displayWhatsPopularGames();

function showPopularGamesCards(ms) {
  const ulsl = document.querySelector('[data-js="popular-games"]');
  ms ? (ulsl.innerHTML = ms) : (ulsl.innerHTML = "");
}
