import React from 'react';
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";

export function ShippingOptions({ options, selectedMethod, onChange }) {
  return (
    <section>
      <h2 className="mt-8 text-lg font-medium">Shipping Methods</h2>
      <RadioGroup defaultValue={selectedMethod} onValueChange={onChange} className="mt-5 grid gap-6">
        {options.map((option) => (
          <div key={option.value} className="relative">
            <RadioGroupItem value={option.value} id={option.value} className="peer sr-only" />
            <Label htmlFor={option.value} className="flex cursor-pointer select-none rounded-lg border border-blue-800 p-4 peer-checked:border-blue-500 peer-checked:bg-blue-900">
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
  );
}
