import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Products from "../components/ProductCard";
import Stats from "../components/StatCard";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
     axios.get(`https://fakestoreapi.com/products`).then(response=>{
        const data = response.data;
        console.log(data);
        setProducts(data);
      })
      
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />

      
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading.....</div>
      )}
      <Products />
      <Stats />
    </>
  );
};

export default Home;
