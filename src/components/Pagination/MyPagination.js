import React from 'react';
import '../Pagination/pagination.css';

export default function MyPagination({ totalItem, itemPerPage, handleCallBack, current_page }) {

  let Pages = [];
  for (let i = 0; i < Math.ceil(totalItem / itemPerPage); i++) {
    Pages.push(i);
  }

  return (
    <>
      {
        Pages.map((page, index) => {
          return (                        
            <button
              onClick={(e) => handleCallBack(index + 1)}
              className={"paginationButton " + (page+1 == current_page ? 'activePage' : '' )} key={index}>
              {page + 1}
            </button>
          )
        })

      }
    </>
  )
}
