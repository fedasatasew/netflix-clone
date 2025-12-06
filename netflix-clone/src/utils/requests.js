const API_KEY = process.env.REACT_APP_OMDB_KEY;

export const requests = {
  trending: [
    `?apikey=${API_KEY}&s=avengers`,
    `?apikey=${API_KEY}&s=spider`,
    `?apikey=${API_KEY}&s=batman`,
    `?apikey=${API_KEY}&s=superman`,
    `?apikey=${API_KEY}&s=transformers`,
  ],
  popularSeries: [
    `?apikey=${API_KEY}&s=stranger`,
    `?apikey=${API_KEY}&s=vikings`,
    `?apikey=${API_KEY}&s=walking`,
  ],
  action: [
    `?apikey=${API_KEY}&s=action`,
    `?apikey=${API_KEY}&s=war`,
    `?apikey=${API_KEY}&s=mission`,
  ],
  horror: [
    `?apikey=${API_KEY}&s=horror`,
    `?apikey=${API_KEY}&s=ghost`,
    `?apikey=${API_KEY}&s=conjuring`,
  ],
  romance: [
    `?apikey=${API_KEY}&s=love`,
    `?apikey=${API_KEY}&s=romance`,
    `?apikey=${API_KEY}&s=wedding`,
  ],
  comedy: [
  `?apikey=${API_KEY}&s=comedy`,
  `?apikey=${API_KEY}&s=funny`,
  `?apikey=${API_KEY}&s=hangover`,
  `?apikey=${API_KEY}&s=mr bean`,
],
animation: [
  `?apikey=${API_KEY}&s=animation`,
  `?apikey=${API_KEY}&s=disney`,
  `?apikey=${API_KEY}&s=pixar`,
  `?apikey=${API_KEY}&s=cartoon`,
],


};
