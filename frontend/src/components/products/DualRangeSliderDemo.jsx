import React, { forwardRef, useState, useEffect } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

const DualRangeSlider = forwardRef(
  (
    {
      className = "",
      label,
      labelPosition = "top",
      min,
      max,
      step = 1,
      defaultValue = [min, max],
      onValueChange,
      ...props
    },
    ref
  ) => {
    const [values, setValues] = useState(defaultValue);

    useEffect(() => {
      setValues(defaultValue);
    }, [defaultValue]);

    const handleValueChange = (newValues) => {
      setValues(newValues);
      if (onValueChange) {
        onValueChange(newValues);
      }
    };

    return (
      <div className="w-full flex flex-col items-center">
        <SliderPrimitive.Root
          ref={ref}
          className={`relative flex w-full touch-none select-none items-center ${className}`}
          min={min}
          max={max}
          step={step}
          value={values}
          onValueChange={handleValueChange}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-white">
            <SliderPrimitive.Range className="absolute h-full bg-blue-500" />
          </SliderPrimitive.Track>
          {values.map((value, index) => (
            <SliderPrimitive.Thumb
              key={index}
              className="block h-5 w-5 rounded-full border-2 border-blue-500 bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            />
          ))}
        </SliderPrimitive.Root>
        <div className="flex justify-between w-full text-sm text-gray-300 mt-2">
          <span>₹{values[0]}</span>
          <span>₹{values[1]}</span>
        </div>
      </div>
    );
  }
);

DualRangeSlider.displayName = "DualRangeSlider";

export { DualRangeSlider };
