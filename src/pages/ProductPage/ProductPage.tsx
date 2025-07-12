import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../types";
import style from "./ProductPage.module.css";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [error, setError] = useState<string>("");

  async function fetchProduct(id: string | undefined) {
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);

      if (!res.ok) {
        throw new Error(`Request error: ${res.status} ${res.statusText}`);
      }

      const obj = await res.json();
      setProduct(obj);
    } catch (error) {
      setError(`Error receiving product details: ${error}`);
    }
  }

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  return (
    <section className={style.mainSection}>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className={style.mainDiv}>
          <h2>{product?.title}</h2>
          <div className={style.imgDiv}>
            {product?.images?.map((img, index) => (
              <img key={index} src={img} alt={`product image ${index + 1}`} />
            ))}
          </div>
          <span>{product?.price} $</span>
          <p>{product?.description}</p>
        </div>
      )}
    </section>
  );
}
