import pet1 from "../../../assets/Pet_1.png";
import pet2 from "../../../assets/Pet_2.png";
import pet3 from "../../../assets/Pet_3.png";
import pet4 from "../../../assets/Pet_4.png";

const categories = [
  { img: pet1, title: "Dog Food" },
  { img: pet2, title: "Rabbit Food" },
  { img: pet3, title: "Cat Food" },
  { img: pet4, title: "Bird Food" },
];

export function Category() {
  return (
    <section id="category" className="py-16 bg-gray-100">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Pet Food by Category</h1>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 text-center"
          >
            <img src={category.img} alt={category.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{category.title}</h3>
              <a
                href="#"
                className="inline-block bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-blue-700 transition duration-200"
              >
                Buy now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
