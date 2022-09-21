import {
  displaySpecialOffers,
  setSpecialOffer_BackgroundImage,
  displayRecommended,
  setRecommended_BackgroundImage,
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
