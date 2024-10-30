"use client";

import { testimonials } from "@/constants/page-testimonials";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const TestimonialsGrid = () => {
  const first = testimonials.slice(0, 4);
  const second = testimonials.slice(4, 8);
  const third = testimonials.slice(8, 12);
  const fourth = testimonials.slice(12, 16);

  const grid = [first, second, third, fourth];
  return (
    <div className="flex flex-col gap-4">
      {/* First row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {grid.map((testimonialsCol, index) => (
          <div key={`testimonials-col-${index}`} className="grid gap-4">
            {testimonialsCol.map((testimonial) => (
              <Card key={`testimonial-${testimonial.src}-${index}`}>
                <Quote>{testimonial.quote}</Quote>
                <div className="flex gap-2 items-center mt-8">
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <QuoteDescription className="text-neutral-300">
                      {testimonial.name}
                    </QuoteDescription>
                    <QuoteDescription className="text-neutral-400">
                      {testimonial.designation}
                    </QuoteDescription>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ))}
      </div>

      {/* Second row - mirrored */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {grid.map((testimonialsCol, index) => (
          <div key={`testimonials-col-mirror-${index}`} className="grid gap-4">
            {testimonialsCol.map((testimonial) => (
              <Card key={`testimonial-mirror-${testimonial.src}-${index}`}>
                <Quote>{testimonial.quote}</Quote>
                <div className="flex gap-2 items-center mt-8">
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <QuoteDescription className="text-neutral-300">
                      {testimonial.name}
                    </QuoteDescription>
                    <QuoteDescription className="text-neutral-400">
                      {testimonial.designation}
                    </QuoteDescription>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-8 rounded-xl relative",
        "bg-[#1a1a1a]",
        "border border-[rgba(255,255,255,0.15)]",
        "group hover:bg-[#202020]",
        "transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("text-base font-bold text-white py-2 leading-relaxed", className)}>
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn("text-sm font-medium text-neutral-300 max-w-sm leading-normal", className)}
    >
      {children}
    </p>
  );
};
