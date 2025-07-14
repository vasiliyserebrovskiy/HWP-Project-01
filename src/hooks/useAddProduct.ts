import { useState } from "react";
import type { AddProduct } from "../types";

export default function useAddProduct() {
  const [message, setMessage] = useState<string>("");

  async function addProduct(product: AddProduct) {
    console.log(product);
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
        setMessage(
          "Error adding new product. Status: " + (err.message || res.status)
        );
      }
    } catch (error) {
      setMessage("Network error." + error);
    }
  }

  return { addProduct, message };
}
