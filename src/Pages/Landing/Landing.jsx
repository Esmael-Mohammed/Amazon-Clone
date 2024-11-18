import React from "react";
import CarouselComponent from "../../Component/Carousel/CarouselComponent";
import Category from "../../Component/Category/Category";
import Product from "../../Component/Product/Product";
import Layout from "../../Component/Layout/Layout";

const Landing = () => {
  return (
    <Layout>
      <CarouselComponent />
      <Category />
      <Product />
    </Layout>
  );
};

export default Landing;
