import { Star, StarHalf, Quote } from "lucide-react";

const TestimonialCard = ({ name, role, image, rating, quote }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex justify-center mb-4">
      <img
        src={image || "/placeholder.svg"}
        alt={name}
        width={100}
        height={100}
        className="rounded-full shadow-lg"
      />
    </div>
    <h5 className="font-bold text-lg">{name}</h5>
    <h6 className="font-bold my-3 text-sm text-gray-600">{role}</h6>
    <div className="flex justify-center mb-4">
      {[...Array(Math.floor(rating))].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-blue-500 fill-current" />
      ))}
      {rating % 1 !== 0 && <StarHalf className="w-4 h-4 text-blue-500 fill-current" />}
    </div>
    <p className="mb-2 text-gray-700">
      <Quote className="inline-block mr-2 text-gray-400" />
      {quote}
    </p>
  </div>
);

export function Testimonials() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Customer Testimonials</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it! See what our customers have to say about our pet products and services.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Emma Williams"
            role="Pet Owner"
            image="/images/emma.jpg"
            rating={5}
            quote="I bought a pet bed and a few toys for my dog Max from here, and he absolutely loves them! The quality is fantastic, and the delivery was super fast!"
          />
          <TestimonialCard
            name="John Davis"
            role="Cat Lover"
            image="/images/john.jpg"
            rating={4.5}
            quote="I’ve been shopping for my cat Lucy here for months. The cat food is always fresh, and she loves it! Great selection of pet accessories as well."
          />
          <TestimonialCard
            name="Sara Gonzalez"
            role="New Pet Parent"
            image="/images/sara.jpg"
            rating={5}
            quote="I recently adopted a puppy, and I found everything I needed on this site. From food to grooming tools, everything is high quality and reasonably priced!"
          />
        </div>
      </div>
    </div>
  );
}
