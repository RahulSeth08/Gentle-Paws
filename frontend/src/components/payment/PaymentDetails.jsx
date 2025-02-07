import React from 'react';
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Mail, User } from "lucide-react";

export function PaymentDetails() {
  return (
    <section className="mt-10 bg-gray-800 px-4 pt-8 lg:mt-0">
      <h2 className="text-xl font-medium">Payment Details</h2>
      <p className="text-gray-400">Complete your order by providing your payment details.</p>
      <form>
        <Label htmlFor="email" className="mt-4 block text-sm font-medium">Email</Label>
        <div className="relative">
          <Input id="email" name="email" type="email" placeholder="your.email@gmail.com" className="w-full rounded-md border border-blue-800 px-4 py-3 pl-11 text-sm" />
          <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
        </div>
        
        <Label htmlFor="card-holder" className="mt-4 block text-sm font-medium">Card Holder</Label>
        <div className="relative">
          <Input id="card-holder" name="card-holder" type="text" placeholder="Your full name here" className="w-full rounded-md border border-blue-800 px-4 py-3 pl-11 text-sm" />
          <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
        </div>
        
        {/* More form fields for card details, billing address, etc. */}

      </form>
    </section>
  );
}
