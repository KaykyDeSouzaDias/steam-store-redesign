import {
  displaySpecialOffers,
  setSpecialOffer_BackgroundImage,
  displayRecommended,
  setRecommended_BackgroundImage,
  displayWhatsPopularGames,
  displayTopActionCategoriesGames,
  setActionGame_BackgroundImage,
  displayTopFightingCategoriesGames,
  setFightingGame_BackgroundImage,
  displayTopOpenWorldCategoriesGames,
  setOpenWorldGame_BackgroundImage,
  displayValueGamesAndHotDeals,
  setHotDeals_BackgroundImage,
  displayWatchGameTrailer,
} from "./js/index.js";

import { getMainSlider } from "./services/games-database-service.js";

const mainSliderData = await getMainSlider();

document.getElementById(
  "main-slider-image"
).style.backgroundImage = `url("${mainSliderData.image}")`;

displaySpecialOffers();
setSpecialOffer_BackgroundImage();

displayRecommended();
setRecommended_BackgroundImage();

displayWhatsPopularGames();

displayTopActionCategoriesGames();
setActionGame_BackgroundImage();
displayTopFightingCategoriesGames();
setFightingGame_BackgroundImage();
displayTopOpenWorldCategoriesGames();
setOpenWorldGame_BackgroundImage();

displayValueGamesAndHotDeals();
setHotDeals_BackgroundImage();

displayWatchGameTrailer();

const specialOfferTrailer = document.querySelector(".offer-overlay-trailer");
const specialOfferPricesContainer = document.querySelector(".offer-overlay");

specialOfferPricesContainer.addEventListener("mouseenter", function (e) {
  specialOfferTrailer.muted = true;
  specialOfferTrailer.play();
});
specialOfferPricesContainer.addEventListener("mouseout", function (e) {
  specialOfferTrailer.pause();
});
