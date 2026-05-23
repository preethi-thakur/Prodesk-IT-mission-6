import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
      const newItem = {
        ...product,
        cartItemId: Date.now() + Math.random(),
      };
  
      setCart((prev) => [...prev, newItem]);
    };

    const removeFromCart = (cartItemId) => {
      setCart((prev) =>
        prev.filter((item) => item.cartItemId !== cartItemId)
      );
    };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
