import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../types";
import style from "./ProductPage.module.css";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  async function fetchProduct(id: string | undefined) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const obj = await res.json();
    setProduct(obj);
  }

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  return (
    <section className={style.mainSection}>
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
    </section>
  );
}
