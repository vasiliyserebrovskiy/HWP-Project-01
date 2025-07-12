import { useEffect, useState } from "react";
import type { Product } from "../../types";
import { Link } from "react-router-dom";
import style from "./ProductsList.module.css";

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products`);

      if (!res.ok) {
        throw new Error(`Request error: ${res.status} ${res.statusText}`);
      }

      const productsRes = await res.json();
      setProducts(productsRes);
    } catch (error) {
      setError(`Error receiving products list: ${error}`);
    }
  }

  return (
    <div className={style.mainDiv}>
      <h2>Products list</h2>
      {error ? (
        <p>error</p>
      ) : (
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
      )}
    </div>
  );
}
