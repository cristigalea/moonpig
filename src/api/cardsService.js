const corsHack = 'https://cors-escape.herokuapp.com/';
const size = 30;
const cardsListUrl = `${corsHack}https://search.moonpig.com/api/products?size=${size}&searchFacets=occasion_level_3:occasion%3Ewell%20done%3Enew%20job`;
const cardUrl = `${corsHack}https://www.moonpig.com/uk/api/product/product/?mpn=`;

export const fetchCardsList = () => fetch(cardsListUrl).then(res => res.json());
export const fetchCardDetails = id => fetch(`${cardUrl}${id}`).then(res => res.json());