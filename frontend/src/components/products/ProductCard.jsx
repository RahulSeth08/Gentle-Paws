import { ShoppingCart, Check, Minus } from "lucide-react";
import { useCart } from "./CartContext";
import { useState } from "react";

function ProductCard({ product, onImgLoad }) {
  // Ensure that product.price is a valid number, fallback to 0 if invalid
  const price = parseFloat(product.price) || 0;  // Ensure price is a number
  const { addToCart, removeFromCart, cart, loading } = useCart();
  const [added, setAdded] = useState(false);

  // Find if this product is in the cart
  const cartItem = cart?.items?.find((item) => item.product === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = async () => {
    await addToCart(product.id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  const handleRemoveFromCart = async () => {
    if (quantity > 0) {
      await removeFromCart(cartItem.id);
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
      <div className="relative">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-48 object-cover"
          loading="lazy"
          onLoad={onImgLoad}
        />
        {product.isNew && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            New
          </div>
        )}
        {/* Cart badge and remove button */}
        {quantity > 0 && (
          <div className="absolute top-2 right-2 flex items-center gap-1 z-10">
            <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-0.5">+{quantity}</span>
            <button
              className="bg-red-500 hover:bg-red-600 text-white rounded-full p-1 ml-1"
              onClick={handleRemoveFromCart}
              disabled={loading}
              aria-label="Remove from cart"
            >
              <Minus size={14} />
            </button>
          </div>
        )}
      </div>
      <div className="p-4 bg-[#1e1e1e]">
        <h2 className="text-lg font-semibold mb-2 text-white">{product.name}</h2>
        <div className="flex justify-between items-center">
          <p className="text-gray-200 font-bold">
            ₹{price.toFixed(0)} {/* Safely use toFixed after parsing */}
          </p>
          <button
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition relative"
            onClick={handleAddToCart}
            disabled={loading}
          >
            {added ? <Check size={18} /> : <ShoppingCart size={18} />}
            <span>Shop</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
