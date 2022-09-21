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
