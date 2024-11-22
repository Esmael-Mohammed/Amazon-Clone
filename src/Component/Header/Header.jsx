import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import classes from "./Header.module.css";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../utils/firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* logo */}
            <Link to={"/"}>
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            {/* delivery */}
            <Link to="">
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
            </Link>
          </div>
          <div className={classes.search}>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <FaSearch size={38} />

            {/* icon */}
          </div>
          {/* right side */}

          <div className={classes.order_container}>
            <Link className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </Link>
            {/* three component */}
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                    <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={()=>{
                    auth.signOut()
                  }}> Sign Out</span>
                    </>
                ) : 
                (
                    <>
                  <p>Sign In</p>
                  <span> Account & Listis</span>
                    </>

                )}
              </div>
            </Link>
            {/* order */}
            <Link to="/orders">
              <p>returns</p>
              <span>& orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={40} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
