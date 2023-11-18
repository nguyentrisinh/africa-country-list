import { TCountry } from './Country.ts';

export type TCountriesResponse = {
  page: number;
  total: number;
  data: TCountry[];
};
