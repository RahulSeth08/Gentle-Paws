import React, { useState } from "react";
import { Button } from "../components/ui/button"; // Assuming you have a button component
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { ChevronRight, Mail, CreditCard, User } from "lucide-react";

export function Checkout() {
  const [shippingMethod, setShippingMethod] = useState("standard");

  const orderSummaryItems = [
    {
      name: "Premium Dog Food - Large Breed",
      description: "15 lbs",
      price: "$49.99",
      imgSrc: "/placeholder.svg?height=96&width=112",
    },
    {
      name: "Interactive Cat Toy - Laser Pointer",
      description: "1 unit",
      price: "$24.99",
      imgSrc: "/placeholder.svg?height=96&width=112",
    },
  ];

  const shippingOptions = [
    {
      value: "standard",
      label: "Standard Delivery",
      description: "Delivery: 2-4 Days",
      imgSrc: "/placeholder.svg?height=56&width=56",
      price: "$5.00",
    },
    {
      value: "express",
      label: "Express Delivery",
      description: "Delivery: 1-2 Days",
      imgSrc: "/placeholder.svg?height=56&width=56",
      price: "$15.00",
    },
  ];

  const subtotal = 74.98;
  const shippingCost = shippingMethod === "standard" ? 5.0 : 15.0;
  const total = subtotal + shippingCost;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">

      <main className="flex-grow grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <section className="px-4 pt-8">
          <h2 className="text-xl font-medium">Order Summary</h2>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>

          <div className="mt-8 space-y-3 rounded-lg border border-blue-800 bg-gray-800 p-4">
            {orderSummaryItems.map((item, index) => (
              <div key={index} className="flex flex-col rounded-lg bg-gray-800 sm:flex-row">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="m-2 h-24 w-28 rounded-md border border-blue-800 object-cover"
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-gray-400">{item.description}</span>
                  <p className="text-lg font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-8 text-lg font-medium">Shipping Methods</h2>
          <RadioGroup
            defaultValue="standard"
            onValueChange={setShippingMethod}
            className="mt-5 grid gap-6"
          >
            {shippingOptions.map((option) => (
              <div key={option.value} className="relative">
                <RadioGroupItem value={option.value} id={option.value} className="peer sr-only" />
                <Label
                  htmlFor={option.value}
                  className="flex cursor-pointer select-none rounded-lg border border-blue-800 p-4 peer-checked:border-blue-500 peer-checked:bg-blue-900"
                >
                  <img src={option.imgSrc} alt={option.label} className="w-14 object-contain" />
                  <div className="ml-5">
                    <span className="font-semibold">{option.label}</span>
                    <p className="text-blue-300 text-sm leading-6">{option.description}</p>
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </section>

        <section className="mt-10 bg-gray-800 px-4 pt-8 lg:mt-0">
          <h2 className="text-xl font-medium">Payment Details</h2>
          <p className="text-gray-400">Complete your order by providing your payment details.</p>

          <form>
            <Label htmlFor="email" className="mt-4 block text-sm font-medium">
              Email
            </Label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@gmail.com"
                className="w-full rounded-md border border-blue-800 px-4 py-3 pl-11 text-sm"
              />
              <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
            </div>

            <Label htmlFor="card-holder" className="mt-4 block text-sm font-medium">
              Card Holder
            </Label>
            <div className="relative">
              <Input
                id="card-holder"
                name="card-holder"
                type="text"
                placeholder="Your full name here"
                className="w-full rounded-md border border-blue-800 px-4 py-3 pl-11 text-sm"
              />
              <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
            </div>

            <Label htmlFor="card-details" className="mt-4 block text-sm font-medium">
              Card Details
            </Label>
            <div className="flex space-x-2">
              <Input
                id="card-details"
                name="card-details"
                type="text"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                className="w-7/12 rounded-md border border-blue-800 px-4 py-3 text-sm"
              />
              <Input
                name="card-expiry"
                type="text"
                placeholder="MM/YY"
                className="w-1/4 rounded-md border border-blue-800 px-4 py-3 text-sm"
              />
              <Input
                name="card-cvc"
                type="text"
                placeholder="CVC"
                className="w-1/4 rounded-md border border-blue-800 px-4 py-3 text-sm"
              />
            </div>

            <Label htmlFor="billing-address" className="mt-4 block text-sm font-medium">
              Billing Address
            </Label>
            <div className="flex space-x-2">
              <Input
                id="billing-address"
                name="billing-address"
                type="text"
                placeholder="Street Address"
                className="w-2/3 rounded-md border border-blue-800 px-4 py-3 text-sm"
              />
              <select
                name="billing-state"
                className="w-1/3 rounded-md border border-blue-800 px-4 py-3 text-sm"
              >
                <option value="State">State</option>
              </select>
              <Input
                name="billing-zip"
                type="text"
                placeholder="ZIP"
                className="w-1/6 rounded-md border border-blue-800 px-4 py-3 text-sm"
              />
            </div>

            <div className="mt-6 flex justify-between">
              <span className="font-semibold">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="mt-2 flex justify-between">
              <span className="font-semibold">Shipping</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xl font-medium">Total</span>
              <span className="text-2xl font-medium">${total.toFixed(2)}</span>
            </div>

            <Button className="mt-8 w-full rounded-md bg-blue-600 py-2 text-lg text-white">
              Place Order
            </Button>
          </form>
        </section>
      </main>

    </div>
  );
}
