import React from "react";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  image: string;
  onAddToQuote: (product: { name: string; category: string; price: number; image: string }) => void;
}

export default function ProductCard({ name, category, price, image, onAddToQuote }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="h-48 w-full overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full inline-block mb-2">
          {category}
        </span>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-700 mt-1">Starting from ${price}</p>
        <button
          onClick={() => onAddToQuote({ name, category, price, image })}
          className="mt-3 w-full border border-blue-500 text-blue-500 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          Add to Quote
        </button>
      </div>
    </div>
  );
}
