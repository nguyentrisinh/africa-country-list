import './CountryGrid.css';

import { FC } from 'react';

import { TCountry } from '../../models/Country.ts';
import CountryCard from '../CountryCard/CountryCard.tsx';

export type CountryGridProps = {
  data: TCountry[];
};

const CountryGrid: FC<CountryGridProps> = ({ data }) => {
  const range = 3;
  const length = Math.ceil(data.length / 3);
  return (
    <div className="CountryGrid">
      {Array(length)
        .fill('')
        .map((_, i) => {
          return (
            <div className="CountryGrid__Column">
              {Array(range)
                .fill('')
                .map((_, j) => (
                  <CountryCard data={data[i * range + j]} />
                ))}
            </div>
          );
        })}
    </div>
  );
};

export default CountryGrid;
