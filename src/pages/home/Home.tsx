import './Home.css';

import { useEffect, useRef, useState } from 'react';

import Button, { EButtonVariant } from '../../components/Button/Button.tsx';
import Container from '../../components/Container/Container.tsx';
import CountryGrid from '../../components/CountryGrid/CountryGrid.tsx';
import { ENotificationVariant } from '../../components/Notification/Notification.tsx';
import notify from '../../components/Notification/notify.tsx';
import Pagination from '../../components/Pagination/Pagination.tsx';
import { TCountry } from '../../models/Country.ts';
import { getCountries } from '../../services/api.ts';

function Home() {
  const searchParams = new URLSearchParams(window.location.search);
  const pageParam = searchParams.get('page');
  const [page, setPage] = useState<number>(pageParam ? (isNaN(+pageParam) ? 1 : +pageParam) : 1);
  const [total, setTotal] = useState<number | undefined>();
  const [data, setData] = useState<TCountry[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const notiCount = useRef<number>(0);
  useEffect(() => {
    setLoading(true);
    getCountries(page)
      .then((response) => {
        setData(response?.data || []);
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
      <h1 className="Home__Header">Africa countries</h1>
      <div className="Home__ButtonGroup">
        <Button
          variant={EButtonVariant.Success}
          onClick={() => {
            notiCount.current += 1;
            notify(`This is success message ${notiCount.current}`, {
              variant: ENotificationVariant.Success,
            });
          }}
        >
          Show success notification
        </Button>
        <Button
          variant={EButtonVariant.Error}
          onClick={() => {
            notiCount.current += 1;
            notify(`This is error message ${notiCount.current}`, {
              variant: ENotificationVariant.Error,
            });
          }}
        >
          Show error notification
        </Button>
      </div>
      {loading ? 'Loading ... ' : <CountryGrid data={data} />}
      <div className="Home__Pagination">
        <Pagination
          page={page}
          total={total ? Math.ceil(total / 9) : undefined}
          onClick={(page) => {
            setPage(page);
          }}
        />
      </div>
    </Container>
  );
}

export default Home;
