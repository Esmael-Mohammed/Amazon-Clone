import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {img} from './img/card'
import classes from './Carousel.module.css'


const CarouselComponent = () => {
  return (
    <div>
       <Carousel 
       autoPlay={true}
       infiniteLoop={true}
       ShowIndicators={false}
       showThumbs={false}>
        {
            img.map((imgLink,i)=>{
                return <img src={imgLink} key={i}/>
            })
        }


       </Carousel>
       <div className={classes.hero_img}>

       </div>

    </div>
  )
}

export default CarouselComponent