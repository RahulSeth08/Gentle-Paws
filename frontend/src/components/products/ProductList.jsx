import ProductCard from "./ProductCard";
import product1 from "../../assets/product1.jpg"
import product2 from "../../assets/product2.jpeg"
import product3 from "../../assets/product3.jpg"
import product4 from "../../assets/product4.jpg"
import product5 from "../../assets/product5.jpg"
import product6 from "../../assets/product6.jpeg"

const dummyProducts = [
  { id: 1, name: "Premium Dog Food", price: 29.99, image: product1 , isNew: true },
  { id: 2, name: "Interactive Cat Toy", price: 14.99, image: product2 , isNew: true },
  { id: 3, name: "Dog Cage", price: 49.99, image: product3 , isNew: true },
  { id: 4, name: "Cozy Pet Bed", price: 39.99, image: product4 , isNew: true },
  { id: 5, name: "Bird Cage Deluxe", price: 79.99, image: product5 , isNew: true },
  { id: 6, name: "Small Animal Habitat", price: 34.99, image: product6 , isNew: true },
];

function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {dummyProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;