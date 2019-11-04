import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

// Input: pages int
// Output: onClick(page_index)

const Pagination = ({ itemsCount, pageSize, pageSelected, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;

  const firstPage = pageSelected === 0;
  const lastPage = pageSelected === pageCount - 1;
  let pages = _.range(0, pageCount);

  return (
    <nav>
      <ul className="pagination">
        <li className={firstPage ? "page-item disabled" : "page-item"}>
          <button
            className="page-link"
            disabled={firstPage}
            onClick={() => onPageChange(pageSelected - 1)}
          >
            Previous
          </button>
        </li>

        {pages.map(page => (
          <li
            key={page}
            className={page === pageSelected ? "page-item active" : "page-item"}
            onClick={() => onPageChange(page)}
          >
            <button className="page-link">{page + 1}</button>
          </li>
        ))}

        <li className={lastPage ? "page-item disabled" : "page-item"}>
          <button
            className="page-link"
            disabled={lastPage}
            onClick={() => onPageChange(pageSelected + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageSelected: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
