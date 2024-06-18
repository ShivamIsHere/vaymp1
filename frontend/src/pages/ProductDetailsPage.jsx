import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
  const { allProducts } = useSelector((state) => state.products);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const isEvent = searchParams.get("isEvent");

  useEffect(() => {
    if (isEvent !== null) {
      const eventProducts = allProducts && allProducts.filter((product) => product.listing === "Event");
      const data = eventProducts.find((product) => product._id === id);
      setData(data);
    } else {
      const data = allProducts && allProducts.find((product) => product._id === id);
      setData(data);
    }
  }, [allProducts, id, isEvent]);

  return (
    <div>
      <Header />
      {data ? <ProductDetails data={data} /> : <p>Loading...</p>}
      {!isEvent && data && <SuggestedProduct data={data} />}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
