import React from 'react';
import { categoryData } from './categoryFullinfo';
import classes from './category.module.css'
import CategoryCard from './CategoryCard';

const Category = () => {
  return (
   <section className={classes.category_container}>

     {
       categoryData?.map((info,i) => (
        <CategoryCard data={info} key={i}/>
       ))
     }
   
   </section>
  );
};

export default Category;
