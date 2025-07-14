import { useState } from "react";
import type { AddProduct } from "../types";
//need add something to rebuild on server
export default function useAddProduct() {
  const [message, setMessage] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>("");

  async function addProduct(product: AddProduct) {
    //console.log(product);
    setErrMessage("");
    setMessage("");
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products/`, {
        method: "POST",
        headers: { "Content-Type": "Application/JSON" },
        body: JSON.stringify(product),
      });
      if (res.ok) {
        setMessage("Successfully added new product.");
      } else {
        const err = await res.json();
        setErrMessage(
          "Error adding new product. Status: " + (err.message || res.status)
        );
      }
    } catch (error) {
      setErrMessage("Network error." + error);
    }
  }

  return { message, errMessage, addProduct };
}
