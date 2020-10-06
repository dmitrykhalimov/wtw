import {getRandomInteger} from "../utils/common";
import {translateRatingToText} from "../utils/common";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;
const TITLES = [
  `Fantastic Beasts: The Crimes of Grindewald`,
  `Bohemian Rhapsody`,
  `Mackbeth`,
  `Aviator`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Pulp Fiction`,
];

const GENRES = [
  `Fantasy`,
  `Biography`,
  `Historical`,
  `Drama`,
  `Horror`,
  `Adventure`,
  `Comedy`,
  `Crime`
];

const DIRECTORS = [
  `David Yates`,
  `Bryan Singer`,
  `Justin Kurzel`,
  `Martin Scorsese`,
  `Jemaine Clement`,
  `Alejandro González Iñárritu`,
  `Peter Howitt`,
  `‎Quentin Tarantino‎`
];

// вероятнее всего должен быть объект, но для упрощения сделал массив
const PREVIEWS = [
  `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `bohemian-rhapsody.jpg`,
  `macbeth.jpg`,
  `aviator.jpg`,
  `what-we-do-in-the-shadows.jpg`,
  `revenant.jpg`,
  `johnny-english.jpg`,
  `pulp-fiction.jpg`
];

// каждый состав вероятно должен быть отдельным массивом, но для упрощения сделал одной строкой
const CAST = [
  `Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Samantha Morton, Jon Voight, Carmen Ejogo, Colin Farrell`,
  `Rami Malek as Mercury, with Lucy Boynton, Gwilym Lee, Ben Hardy, Joe Mazzello, Aidan Gillen, Tom Hollander, Allen Leech, Mike Myers`,
  `Michael Fassbender, Marion Cotillard, Paddy Considine, Sean Harris, Jack Reynor, Elizabeth Debicki, David Thewlis`,
  `Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Samantha Morton, Jon Voight, Carmen Ejogo, Colin Farrell`,
  `Rami Malek as Mercury, with Lucy Boynton, Gwilym Lee, Ben Hardy, Joe Mazzello, Aidan Gillen, Tom Hollander, Allen Leech, Mike Myers`,
  `Michael Fassbender, Marion Cotillard, Paddy Considine, Sean Harris, Jack Reynor, Elizabeth Debicki, David Thewlis`,
  `Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Samantha Morton, Jon Voight, Carmen Ejogo, Colin Farrell`,
  `Rami Malek as Mercury, with Lucy Boynton, Gwilym Lee, Ben Hardy, Joe Mazzello, Aidan Gillen, Tom Hollander, Allen Leech, Mike Myers`,
];

const Votes = {
  MIN: 10,
  MAX: 1000,
};

const Years = {
  MIN: 2010,
  MAX: 2020
};

// т.к. моки носят абсолютно утилитарный характер, и будут удалены я не стал захламлять проект созданием utils/mocks, для общих методов, а все запихнул в один файл.

const makeMocks = () => {
  return TITLES.map((item, index) => {
    let rank = Number(`${getRandomInteger(1, 9)}.${getRandomInteger(1, 9)}`);
    return {
      id: index,
      title: TITLES[index],
      preview: PREVIEWS[index],
      poster: `https://loremflickr.com/273/410`,
      background: `https://loremflickr.com/1300/552`,
      genre: GENRES[index],
      rankNumber: rank,
      rankText: translateRatingToText(rank),
      year: getRandomInteger(Years.MIN, Years.MAX),
      votes: getRandomInteger(Votes.MIN, Votes.MAX),
      director: DIRECTORS[index],
      cast: CAST[index]
    };
  });
};

export default makeMocks();