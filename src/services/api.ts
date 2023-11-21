import { TCountriesResponse } from '../models/CountriesResponse.ts';
import { TCountry } from '../models/Country.ts';
import { getRandomArbitrary, mockImage } from '../utils/mockImage.ts';
import rawData from './data.json';
const sleep = (time: number) =>
  new Promise((rs) => {
    setTimeout(() => rs(''), time);
  });

const data = rawData.map((item) => ({
  ...item,
  image: mockImage(400, getRandomArbitrary(300, 800)),
}));

export const getCountries = async (page: number): Promise<TCountriesResponse | undefined> => {
  await sleep(1000);
  const index = page - 1;
  const offset = (page - 1) * 9;
  if (offset > data.length || offset < 0) return;
  return {
    page,
    total: data.length,
    data: data.slice(index * 9, page * 9),
  };
};

export const getCountry = async (countryCode?: string): Promise<TCountry | undefined> => {
  await sleep(1000);
  return data.find(({ code }) => code === countryCode);
};
