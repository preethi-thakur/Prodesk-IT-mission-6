import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return ( 
   <div className="mt-20  px-10">
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition duration-300 p-5">


  <div className="overflow-hidden rounded-2xl">
    <img
      src={product.thumbnail}
      alt={product.title}
      className="h-56 w-full object-cover hover:scale-110 transition duration-500"
    />
  </div>

  <div className="mt-5">

    <h2 className="text-2xl font-bold text-[#5B2E1F] truncate">
      {product.title}
    </h2>

    <p className="text-xl font-semibold text-[#FF7043] mt-2">
      ${product.price}
    </p>

 
    <Link
      to={`/product/${product.id}`}
      className="mt-5 inline-block w-full text-center bg-[#FF8A65] hover:bg-[#ff7043] text-white py-3 rounded-2xl text-lg font-semibold transition duration-300 shadow-md"
    >
      View Details
    </Link>

  </div>

</div>
   </div>
  );
}
