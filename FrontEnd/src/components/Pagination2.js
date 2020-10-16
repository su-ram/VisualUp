import React from 'react';

const Pagination2 = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-con">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} >
            <a onClick={(e) => paginate(e, number)} href="#" >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination2;