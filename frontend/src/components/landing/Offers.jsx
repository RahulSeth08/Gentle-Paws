import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { ArrowRight, PawPrintIcon as Paw } from "lucide-react"

export function Offers() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Special Offers for Your Furry Friends</h2>
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
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Shop All Offers <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function OfferCard({ title, description, code, expiry }) {
  return (
    <Card className="bg-white border-2 border-blue-100 hover:border-blue-200 transition-colors">
      <CardContent className="p-6">
        <Paw className="h-10 w-10 text-blue-500 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Badge variant="secondary" className="bg-blue-100 text-blue-600 px-3 py-1">
            {code}
          </Badge>
          <span className="text-sm text-gray-500">{expiry}</span>
        </div>
      </CardContent>
    </Card>
  )
}
