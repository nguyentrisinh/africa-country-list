import { TCountriesResponse } from '../models/CountriesResponse.ts';
import { TCountry } from '../models/Country.ts';

export const response2Countries = (response: TCountriesResponse): TCountry[] =>
  Object.entries(response.data).map(([code, { country, region, image }]) => ({
    code,
    region,
    country,
    image,
  }));
