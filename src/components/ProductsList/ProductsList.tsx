import { useEffect, useState } from "react";
import type { Product } from "../../types";
import { Link } from "react-router-dom";
import style from "./ProductsList.module.css";

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
    const productsRes = await res.json();
    setProducts(productsRes);
  }

  return (
    <div className={style.mainDiv}>
      <h2>Products list</h2>
      <div className={style.productsDiv}>
        <ul>
          {products.map((p) => (
            <li key={"product" + p.id} className={style.productCard}>
              <h3>{p.title}</h3>
              <img src={p.images[0]} alt="product" />
              <span>{p.price} $</span>
              <Link to={`/products/${p.id}`}>To product</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
