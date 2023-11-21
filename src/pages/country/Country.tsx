import './Country.css';

import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '../../components/Button/Button.tsx';
import Container from '../../components/Container/Container.tsx';
import { TCountry } from '../../models/Country.ts';
import { getCountry } from '../../services/api.ts';

export type CountryProps = {};

const Country: FC<CountryProps> = () => {
  const { countryCode } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState<TCountry>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getCountry(countryCode)
      .then(setCountry)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Container>Loading...</Container>;

  if (!country) return <Container>Not found</Container>;

  return (
    <Container>
      <div className="Country">
        <Button
          className="Country__Button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </Button>
        <h1>{country.country}</h1>
        <h2>Code: {country.code}</h2>
        <img src={country.image} className="Country__Img" />
      </div>
    </Container>
  );
};

export default Country;
