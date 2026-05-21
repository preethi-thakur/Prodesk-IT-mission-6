import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md text-white px-8 py-4 mb-32 flex items-center justify-between shadow-lg">
      <h1 className="text-3xl font-extrabold tracking-wide text-[#FFD6C9] cursor-pointer">
        ShopZone
      </h1>

      <div className="flex items-center gap-8 text-lg font-medium">
        <Link
          to="/"
          className="hover:text-[#FFD6C9] transition duration-300"
        >
          Home
        </Link>

        <Link
          to="/shop"
          className="hover:text-[#FFD6C9] transition duration-300"
        >
          Shop
        </Link>

        <Link
          to="/contact"
          className="hover:text-[#FFD6C9] transition duration-300"
        >
          Contact
        </Link>

        <Link
          to="/cart"
          className="hover:text-[#FFD6C9] transition duration-300"
        >
          Cart ({cart.length})
        </Link>

        <Link
          to="/login"
          className="bg-[#FF8A65] px-5 py-2 rounded-full hover:bg-[#ff7043] transition duration-300 shadow-md"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
