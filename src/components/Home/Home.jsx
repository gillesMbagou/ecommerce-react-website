import { getProducts } from "../../data/products";
import { Link } from "react-router-dom";
import ProductCard from "../product/ProductCard.jsx";


export default function Home({ prop = "Welcome to ShopHub" }) {
  const products = getProducts();
  console.log(products);
  return (
    <>
      <div className="page">
        <div className="page-hero">
          <h1 className="home-title Home">{prop}</h1>
          <p className="home-subtitle ">
            {" "}
            Discover amazing products at great prices
          </p>
        </div>
        <div className="container">
          <h2 className="page-title">Our Products</h2>
          <div className="product-grid">
            {products.map((product) => (
             <ProductCard product={product} key={product.id}/>
            ))}
          </div>
        </div>
        <div>
          <footer className="page-footer"></footer>
        </div>
      </div>
    </>
  );
}
