import React from 'react';
import shopImage from "../assets/shopp.png";

export default function Home() {
  return (
    <div className="w-full h-screen">
  <img
    src={shopImage}
    alt="ShopZone"
    className="w-full h-full object-cover"
  />
</div>
  );
}