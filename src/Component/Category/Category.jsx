import React from 'react';
import { categoryData } from './categoryFullinfo';

const Category = () => {
  return (
    <>
      {
        categoryData?.map((data, index) => (
          <a href="" key={index}>
            <span>
              <h2>
                {data?.title}
              </h2>
              <img src={data?.imgLink} alt={data?.title || 'Category'} />
              <p>Shop Now</p>
            </span>
          </a>
        ))
      }
    </>
  );
};

export default Category;
