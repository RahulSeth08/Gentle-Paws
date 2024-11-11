import offer1 from "../../../assets/offer-img1_.png";
import offer2 from "../../../assets/offer-img2_.png";

const offers = [
  { img: offer1, title: 'Best Deals', discount: 'Up to 50%' },
  { img: offer2, title: "Today's Discount", discount: 'Up to 80%' },
];

export function Offer() {
  return (
    <section id="offer" className="py-16 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Products on Offer</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {offers.map((offer, index) => (
          <div 
            key={index} 
            className="w-64 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img src={offer.img} alt={offer.title} className="w-full h-40 object-cover" />
            <div className="p-6 text-center">
              <span className="block text-lg font-semibold text-gray-600">{offer.title}</span>
              <h3 className="text-2xl font-bold text-blue-500 my-2">{offer.discount}</h3>
              <a 
                href="#" 
                className="inline-block mt-4 bg-blue-500 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
              >
                View Offers
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
