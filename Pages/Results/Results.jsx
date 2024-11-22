import React, { useEffect, useState } from "react";
import Layout from "../../Component/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../utils/endPoints";
import ProductCard from "../../Component/Product/ProductCard";
import classes from "./Results.module.css";
import Loader from "../../Component/Loader/Loader";

const Results = () => {
  const { categoryName } = useParams();
  const [result, setResult] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true)
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        // Ensure array
        //  console.log(res)
        setResult(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setisLoading(false);
      });
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category/{categoryName}</p>
          <hr />
          <div className={classes.products_container}>
            {result?.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  renderDesc={false}
                  renderAdd={true}
                />
              );
            })}
          </div>
        </section>
      )}

      {/* <div> Results</div> */}
    </Layout>
  );
};

export default Results;
