import React, { useContext } from "react";
import Layout from "../../Component/Layout/Layout";
import { DataContext } from "../../Component/DataProvider/DataProvider";
import ProductCard from "../../Component/Product/ProductCard";
import CurrencyFormat from "../../Component/CurrencyFormat/CurrencyFormat";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";
import { Type } from "../../utils/action.type";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const increment=(item)=>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item
    })
  }
  const decrement=(id)=>{
    dispatch({
      type:Type.REMOVE_FROM_BASKET,
      id
    })
  }
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.car_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {basket?.length == 0 ? (
            <p>OOps !No item in your cart</p>
          ) : (
            basket?.map((item,i) => {
              return (
                <section className={classes.cart_product}>
                  
                  <ProductCard
                    key={i}
                    product={item}
                    renderDesc={true}
                    flex={true}
                    renderAdd={false}
                  />
                  
                  <div className={classes.btn_container}>
                    <button className={classes.btn} onClick={()=>increment(item)}>
                    <IoIosArrowUp size={25}/>
                    </button>
                    <span>{item.amount}</span>
                    <button className={classes.btn} onClick={()=>decrement(item.id)}>
                    <IoIosArrowDown size={25}/>
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal({basket?.length} item)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contain a gift </small>
            </span>
            <Link to={"/payment"}>Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
