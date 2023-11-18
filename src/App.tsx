import './App.css';

import { useEffect, useState } from 'react';

import Container from './components/Container/Container.tsx';
import CountryGrid from './components/CountryGrid/CountryGrid.tsx';
import Notification from './components/Notification/Notification.tsx';
import Pagination from './components/Pagination/Pagination.tsx';
import { TCountry } from './models/Country.ts';
import { getCountries } from './services/api.ts';

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const pageParam = searchParams.get('page');
  const [page, setPage] = useState<number>(pageParam ? (isNaN(+pageParam) ? 1 : +pageParam) : 1);
  const [total, setTotal] = useState<number | undefined>();
  const [data, setData] = useState<TCountry[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  useEffect(() => {
    setLoading(true);
    setMessage('');
    getCountries(page)
      .then((response) => {
        setData(response?.data || []);
        setMessage('Successfully!');
        setTotal(response?.total);
      })
      .finally(() => setLoading(false));
    if (window.history.pushState) {
      const newurl =
        window.location.protocol + '//' + window.location.host + window.location.pathname + `?page=${page}`;
      window.history.pushState({ path: newurl }, '', newurl);
    }
  }, [page]);
  return (
    <Container>
      <h1 className="App__Header">Africa countries</h1>
      {loading ? 'Loading ... ' : <CountryGrid data={data} />}
      <div className="App__Pagination">
        <Pagination
          page={page}
          total={total ? Math.ceil(total / 9) : undefined}
          onClick={(page) => {
            setPage(page);
          }}
        />
      </div>
      <Notification>{message}</Notification>
    </Container>
  );
}

export default App;
