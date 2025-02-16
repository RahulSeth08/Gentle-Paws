import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowRight, PawPrintIcon as Paw } from "lucide-react";

export function Offers() {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-gray-800 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-50 flex items-center justify-center gap-2">
          <Paw className="w-8 h-8 text-blue-400" />
          Special Offers for Your Furry Friends
          <Paw className="w-8 h-8 text-blue-400" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <OfferCard
            title="New Customer Discount"
            description="Get 20% off your first order of premium pet food!"
            code="NEWPET20"
            expiry="Valid for 30 days"
          />
          <OfferCard
            title="Subscribe & Save"
            description="10% off every order when you subscribe to monthly deliveries."
            code="SUBSCRIBE10"
            expiry="Ongoing offer"
          />
          <OfferCard
            title="Buy 2, Get 1 Free"
            description="Mix and match any three bags of dry dog or cat food."
            code="B2G1FREE"
            expiry="Limited time offer"
          />
        </div>
        <div className="text-center mt-12">
          <Button className="bg-blue-500 hover:bg-blue-600 text-gray-900 px-6 py-2 rounded-xl font-medium shadow-[2px_2px_8px_rgba(0,0,0,0.2)]">
            Shop All Offers <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function OfferCard({ title, description, code, expiry }) {
  return (
    <Card className="bg-gray-800 border-2 border-blue-300 hover:border-blue-400 transition-colors">
      <CardContent className="p-6">
        <Paw className="h-10 w-10 text-blue-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-50">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Badge variant="secondary" className="bg-blue-500 text-gray-900 px-3 py-1">
            {code}
          </Badge>
          <span className="text-sm text-gray-500">{expiry}</span>
        </div>
      </CardContent>
    </Card>
  );
}
