"use client";
import { Button } from "@nextui-org/react";

import ImageSlider from "@components/imageSlider";

const images = [
  { alt: "image1", src: "/start-print.jpg" },
  { alt: "image2", src: "/impresion-l.jpg" },
  { alt: "image3", src: "/hand-printed.jpg" },
];
export default function Home() {
  return (
    <main className="flex min-h-[95vh] justify-between px-20 max-md:flex-col max-md:justify-start max-md:px-4">
      <div className="w-3/5 flex justify-center items-center max-md:w-full max-md:h-[40%]">
        <ImageSlider images={images} />
      </div>
      <div className="w-2/5 flex flex-col justify-center px-10 max-md:w-full max-md:p-4">
        <h1 className="text-5xl font-bold mb-4 max-md:text-center">
          Diseños únicos, hechos para ti
        </h1>
        <p className="mb-4 max-md:text-center">
          Descubre un mundo de creatividad con nuestra experiencia en impresión
          3D. Desde diseños complejos hasta soluciones prácticas, hacemos
          realidad sus ideas.
        </p>
        <Button color="primary" variant="bordered" className="w-full font-bold">
          Ver catálago
        </Button>
      </div>
    </main>
  );
}
