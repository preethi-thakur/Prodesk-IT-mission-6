import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h1>Loading...</h1>;

  return (
    <div className="p-6">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-80"
      />

      <h1 className="text-3xl font-bold mt-4">
        {product.title}
      </h1>

      <p className="mt-2">{product.description}</p>

      <p className="text-2xl mt-3">
        ${product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white px-4 py-2 mt-4"
      >
        Add To Cart
      </button>
    </div>
  );
}