import React, { useContext, useEffect, useState } from "react";
import Layout from "../../Component/Layout/Layout";
import { DataContext } from "../../Component/DataProvider/DataProvider";
import classes from "./Order.module.css";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../utils/firebase";
import ProductCard from "../../Component/Product/ProductCard";

const Orders = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      const userCollection= collection(db, "users", user.uid, "orders");
      const qry = query(userCollection, orderBy("created", "desc"));
      onSnapshot(qry, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        console.log(snapshot);
      });

    } else {
      setOrders([]);
    }
  }, []);
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your Orders</h2>
          {orders?.length === 0 && <div style={{padding:"20px"}}>you don't have orders yet</div>}
          {/* orders item */}
          <div>
            {orders?.map((eachOrder, i) => (
              <div key={i}>
                <hr />
                <p>OrderId:{eachOrder.id}</p>
                {eachOrder?.data?.basket?.map((order) => (
                  <ProductCard flex={true} product={order} key={order.id} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Orders;
