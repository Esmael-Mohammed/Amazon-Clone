import React from 'react'
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import classes from './Header.module.css'
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';

const Header = () => {
  return (
    <>
    <section>
        <div className={classes.header_container}>
            <div className={classes.logo_container}>
                {/* logo */}
                <a href="">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                </a>
                {/* delivery */}
                <a href="">
                <div className={classes.delivery}>
                <span>
                    {/* icon */}
                    <SlLocationPin />
                </span>
                <div>
                    <p>Delivered to</p>
                    <span>Ethiopan</span>
                </div>
                </div>
                </a>
            </div>
            <div className={classes.search}>
                {/* search */}
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" name='' id='' placeholder='search product'/>
                <FaSearch size={25}/>

                {/* icon */}
            </div>
            {/* right side */}
          
                <div className={classes.order_container}>
                    <a href="" className={classes.language}>

                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041" alt="" />
                    <section>
                        <option value="">EN</option>
                    </section>
                    </a>
                {/* three component */}
                <a href="">
                        <p>Sign In</p>
                        <span> Account & Listis</span>
                    </a>
                    {/* order */}
                <a href="">
                    <p>returns</p>
                    <span>& orders</span>
                </a>
                {/* cart */}
                <a href="" className={classes.cart}>
                    <BiCart size={40}/>
                    <span>0</span>
                </a>
                </div>
               
        </div>
    </section>
        <LowerHeader/>
   

    </>
  )
}

export default Header