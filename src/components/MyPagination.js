import React from 'react';
import '../views/sections/css/slot.css';

export default function MyPagination({ totalItem, itemPerPage, handleCallBack }) {

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
              className='paginationButton' key={index}>
              {page + 1}
            </button>
          )
        })

      }
    </>
  )
}
