import ProductCard from "./ProductCard";

const dummyProducts = [
  { id: 1, name: "Premium Dog Food", price: 29.99, image: "/images/dog-food.jpg", isNew: true },
  { id: 2, name: "Interactive Cat Toy", price: 14.99, image: "/images/cat-toy.jpg", isNew: true },
  { id: 3, name: "Aquarium Starter Kit", price: 49.99, image: "/images/aquarium.jpg", isNew: true },
  { id: 4, name: "Cozy Pet Bed", price: 39.99, image: "/images/pet-bed.jpg", isNew: true },
  { id: 5, name: "Bird Cage Deluxe", price: 79.99, image: "/images/bird-cage.jpg", isNew: true },
  { id: 6, name: "Small Animal Habitat", price: 34.99, image: "/images/habitat.jpg", isNew: true },
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