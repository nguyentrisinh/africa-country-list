import './CountryCard.css';

import { FC } from 'react';
import { Link } from 'react-router-dom';

import { TCountry } from '../../models/Country.ts';

export type CountryCardProps = {
  data: TCountry;
};

const CountryCard: FC<CountryCardProps> = ({ data }) => {
  return (
    <Link to={`/countries/${data.code}`} className="CountryCard">
      <img className="CountryCard__Image" src={data.image} />
      <div className="CountryCard__Description">
        <table className="CountryCard__Table">
          <tbody>
            <tr>
              <th>Code</th>
              <td>{data.code}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{data.country}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Link>
  );
};

export default CountryCard;
