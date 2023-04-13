import React from 'react';
import ReactPaginate from 'react-paginate';
import '../Pagination/pagination.css';

export default function MyPagination({pageCount, handlePageClick }) {
  return (
    <>
      <ReactPaginate
        className="reactPaginate"
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="prev"
      />
    </>
  )
}
