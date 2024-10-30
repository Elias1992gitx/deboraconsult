"use client";

import React from "react";
import { TestimonialsSlider } from "./slider";
import { TbLocationBolt } from "react-icons/tb";
import { cn } from "@/lib/utils";
import { testimonials } from "@/constants/page-testimonials";
import Image from "next/image";
import { TestimonialsGrid } from "./grid";

export const Testimonials = () => {
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden bg-white">
      <div className="py-60 relative">
        <div className="absolute inset-0 h-full w-full bg-neutral-100/50 opacity-20 [mask-image:radial-gradient(circle_at_center,transparent_20%,white_80%)]">
          <TestimonialsGrid />
        </div>
        <TestimonialsSlider />
      </div>
      <div className="absolute bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-white to-transparent"></div>
    </div>
  )
};