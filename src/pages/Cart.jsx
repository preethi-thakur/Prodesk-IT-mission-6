import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="p-6 mt-20 ">
      <h1 className="text-3xl font-bold  mb-4">
        Cart Items
      </h1>

      {cart.map((item) => (
        <div
          key={item.cartItemId}
          className="border p-4 mb-3 flex flex-col md:flex-row gap-4 rounded-3xl items-start"
        >
          {item.thumbnail && (
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-32 w-32 object-cover rounded"
            />
          )}

          <div className="flex-1">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-lg">${item.price}</p>
            <button
              onClick={() => removeFromCart(item.cartItemId)}
              className="mt-3 bg-orange-600 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <h2 className="text-2xl font-bold mt-6 mb-6">
        Total: ${total} 

      </h2>
       {cart.length > 0 && (
        <Link
          to="/checkout"
          className="bg-[#FF8A65] px-5 py-2  mt-8 rounded-full hover:bg-[#ff7043] transition duration-300 shadow-md"
        >
          Checkout
        </Link>
      )}
    </div>
  );
}
