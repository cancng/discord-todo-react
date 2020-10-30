import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ pages, page }) => {
  return (
    pages > 1 && (
      <ul className='pagination'>
        {[...Array(pages).keys()].map((x) => (
          <li key={x + 1} className={x + 1 === page ? 'active' : ''}>
            <Link to={`/todos/${x + 1}`}>{x + 1}</Link>
          </li>
        ))}
      </ul>
    )
  );
};

export default Pagination;
