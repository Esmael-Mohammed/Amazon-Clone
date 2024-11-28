import React, { useContext, useState } from "react";
import Layout from "../../Component/Layout/Layout";
import classes from "./payment.module.css";
import { DataContext } from "../../Component/DataProvider/DataProvider";
import ProductCard from "../../Component/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Component/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../utils/firebase";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Type } from "../../utils/action.type";



const Payment = () => {
  const [{ user, basket },dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const [cardError, setCardError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const navigate=useNavigate()
  const [processing, setProcessing] = useState(false);
  const handleChange = (e) => {
    console.log(e);
    e?.error?.message ? setCardError(e?.error.message) : setCardError("");
  };
  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);
      //1.backend || functions .... contacts to the clinet secret

      const reponse = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
      // console.log(reponse.data);

      // 2. clinet sit create side confimation
      const clientSecret = reponse.data?.clientSecret;
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      // console.log(confirmation);
      // console.log(paymentIntent)
      // 3.after the confirmation --> order fire store database save clear basket
      const ordersRef=collection(db,"users",user.uid,"orders");
      const orderDoc=doc(ordersRef,paymentIntent.id);
      await setDoc(orderDoc,{
        basket:basket,
        amount:paymentIntent.amount,
        created:paymentIntent.created,
      });
      //empty the basket
      dispatch({
        type:Type.EMPTY_BASKET,
      })
      setProcessing(false);
      navigate("/orders",{state:{msg:"you have placed new Order"}})
      // await db
      //   .collection("users")
      //   .doc(user.uid)
      //   .collection("orders")
      //   .doc(paymentIntent.id)
      //   .set({
      //     basket: basket,
      //     amount: paymentIntent.amount,
      //     created: paymentIntent.created,
      //   });
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };
  return (
    <Layout>
      {/* heder */}
      <div className={classes.payment_header}>Checkout ({totalItem}) items</div>
      {/* payment method */}
      <section className={classes.Payment}>
        {/* addres */}
        <div className={classes.flexed}>
          <h3>Deliver Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>address line</div>
            <div>city</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flexed}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flexed}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p>
                      <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>Please Wait...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
