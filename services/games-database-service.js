export async function getMainSlider() {
  const data = await fetch("./database/main-slider-database.json").then((res) =>
    res.json()
  );
  return data;
}

export async function getSpecialOffers() {
  const data = await fetch("./database/special-offers-database.json").then(
    (res) => res.json()
  );
  return data;
}

export async function getRecommended() {
  const data = await fetch("./database/recommended-database.json").then((res) =>
    res.json()
  );
  return data;
}

export async function getWhatsPopular() {
  const data = await fetch("./database/whats-popular-database.json").then(
    (res) => res.json()
  );
  return data;
}

export async function getTopActionCategories() {
  const data = await fetch("./database/top-categories/action-games.json").then(
    (res) => res.json()
  );
  return data;
}
export async function getTopFightingCategories() {
  const data = await fetch(
    "./database/top-categories/fighting-games.json"
  ).then((res) => res.json());
  return data;
}
export async function getTopOpenWorldCategories() {
  const data = await fetch(
    "./database/top-categories/open-world-games.json"
  ).then((res) => res.json());
  return data;
}

export async function getValueGamesAndHotDeals() {
  const data = await fetch("./database/hot-deals-database.json").then((res) =>
    res.json()
  );
  return data;
}

export async function getWatchGameTrailer() {
  const data = await fetch("./database/watch-game-trailer-database.json").then(
    (res) => res.json()
  );
  return data;
}
