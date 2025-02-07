import React from 'react';
import { Button } from "../components/ui/button";

export function Summary({ subtotal, shippingCost, total }) {
  return (
    <section className="mt-6 flex justify-between">
      <div>
        <div className="mt-6 flex justify-between">
          <span className="font-semibold">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="mt-2 flex justify-between">
          <span className="font-semibold">Shipping</span>
          <span>${shippingCost.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-xl font-medium">Total</span>
        <span className="text-2xl font-medium">${total.toFixed(2)}</span>
      </div>
      <Button className="mt-8 w-full rounded-md bg-blue-600 py-2 text-lg text-white">
        Place Order
      </Button>
    </section>
  );
}
