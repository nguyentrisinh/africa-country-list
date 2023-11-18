import './Pagination.css';

import { FC } from 'react';

export type PaginationProps = {
  page?: number;
  total?: number;
  onClick?: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({ page, total, onClick }) => {
  return (
    <ul className="Pagination">
      {page && page !== 1 && (
        <li onClick={() => onClick?.(1)}>
          <div className="Pagination__Item">Previous</div>
        </li>
      )}
      {Array(total)
        .fill('')
        .map((_, index) => (
          <li className="Pagination__Li" onClick={() => onClick?.(index + 1)}>
            <div
              className={['Pagination__Item', page === index + 1 && 'Pagination__Item--Active']
                .filter(Boolean)
                .join(' ')}
            >
              {index + 1}
            </div>
          </li>
        ))}
      {page && total && page !== total && (
        <li onClick={() => onClick?.(total)}>
          <div className="Pagination__Item Pagination__Item--NextButton">Next</div>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
