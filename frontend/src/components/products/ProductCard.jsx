import { ShoppingCart } from "lucide-react";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
      <div className="relative">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-48 object-cover"
        />
        {product.isNew && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            New
          </div>
        )}
      </div>
      <div className="p-4 bg-[#1e1e1e]">
        <h2 className="text-lg font-semibold mb-2 text-white">{product.name}</h2>
        <div className="flex justify-between items-center">
          <p className="text-gray-200 font-bold">${product.price.toFixed(2)}</p>
          <button className="bg-blue-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;