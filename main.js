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

const recommendedTrailer = document.querySelector("#recommended-trailer");
const recommendedPricesContainer = document.querySelector(
  ".recommended-games-detail-overlay"
);
const recommendedTitleContainer = document.querySelector(
  ".recommended-header-overlay-content"
);

recommendedPricesContainer.addEventListener("mouseenter", function (e) {
  recommendedTrailer.muted = true;
  recommendedTrailer.play();
});
recommendedPricesContainer.addEventListener("mouseout", function (e) {
  recommendedTrailer.pause();
});

recommendedTitleContainer.addEventListener("mouseenter", function (e) {
  recommendedTrailer.muted = true;
  recommendedTrailer.play();
});
recommendedTitleContainer.addEventListener("mouseout", function (e) {
  recommendedTrailer.pause();
});

const topCategoriesTrailer = document.querySelector("#category-trailer");
const topCategoriesPricesContainer = document.querySelector(
  ".top-categories-games-detail-overlay"
);
const topCategoriesTitleContainer = document.querySelector(
  ".top-categories-header-overlay-content"
);

topCategoriesPricesContainer.addEventListener("mouseenter", function (e) {
  topCategoriesTrailer.muted = true;
  topCategoriesTrailer.play();
});
topCategoriesPricesContainer.addEventListener("mouseout", function (e) {
  topCategoriesTrailer.pause();
});

topCategoriesTitleContainer.addEventListener("mouseenter", function (e) {
  topCategoriesTrailer.muted = true;
  topCategoriesTrailer.play();
});
topCategoriesTitleContainer.addEventListener("mouseout", function (e) {
  topCategoriesTrailer.pause();
});
