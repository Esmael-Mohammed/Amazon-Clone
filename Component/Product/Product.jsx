import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './Product.module.css'

const Product = () => {
    const[products,setProduct]=useState();
    const[isLoading,setisLoading]=useState(false)

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setProduct(res.data);
            setisLoading(false)
        }).catch((err)=>{
            console.log(err)
            setisLoading(false)
        })

    },[])
  return (
    <>{
  isLoading?(<Loader/>):(<section className={classes.product_container}>
  {
      products?.map((singleProduct)=>(
          <ProductCard product={singleProduct} key={singleProduct.id} renderAdd={true}/>

      ))
  }

</section>)
    }
    
    </>
  )
    
}

export default Product