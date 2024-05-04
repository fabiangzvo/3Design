"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Image } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faRocket,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("@components/button"));

function Home() {
  const router = useRouter();

  const handleClick = useCallback(() => router.push("/store"), [router]);

  return (
    <section id="main" className="flex flex-col">
      <div className="w-full flex min-h-[30vh] justify-between px-36 max-xl:px-12 max-md:px-4 max-md:flex-col max-md:justify-start">
        <div className="w-3/5 flex justify-center items-center max-md:w-full max-md:mt-5">
          <Image
            src="/print.jpg"
            alt="3d-print"
            className="h-[60vh] max-2xl:h-[30vh]"
          />
        </div>
        <div className="w-2/5 flex flex-col justify-center pl-10 max-md:w-full max-md:p-4">
          <h1 className="text-5xl font-bold mb-4 text-center max-md:text-3xl">
            Diseños únicos, hechos para ti
          </h1>
          <p className="mb-8 text-center text-lg">
            Descubre un mundo de creatividad con nuestra experiencia en
            impresión 3D. Desde diseños complejos hasta soluciones prácticas,
            hacemos realidad sus ideas.
          </p>
          <Button label="Ver catálogo" onClick={handleClick} />
        </div>
      </div>
      <div className="w-full mt-2 flex justify-between items-start px-36 max-xl:px-12 max-md:px-4 mb-8 max-md:flex-col">
        <div className="flex flex-col items-center w-1/3 p-4 border-r-3 border-gray-100 max-md:border-none max-md:w-full">
          <FontAwesomeIcon size="2x" icon={faLightbulb} />
          <span className="text-3xl text-center font-bold mb-4 mt-2">
            Libertad de diseño
          </span>
          <p className="text-center text-lg">
            Deje que su imaginación vuele. Nuestras piezas personalizadas
            impresas en 3D permiten diseños intrincados y geometrías complejas.
          </p>
        </div>
        <div className="flex flex-col items-center w-1/3 p-4 max-md:w-full">
          <FontAwesomeIcon size="2x" icon={faRocket} />
          <span className="text-3xl text-center font-bold mb-4 mt-2">
            Creación rápida de prototipos
          </span>
          <p className="text-center text-lg">
            Acelere el ciclo de desarrollo de su producto. Con la impresión 3D,
            puede crear prototipos rápidamente e iterar diseños.
          </p>
        </div>
        <div className="flex flex-col items-center w-1/3 p-4 border-l-3 border-gray-100 max-md:border-none max-md:w-full">
          <FontAwesomeIcon size="2x" icon={faIndustry} />
          <span className="text-3xl text-center font-bold mb-4 mt-2">
            Produción rentable
          </span>
          <p className="text-center text-lg">
            Ahorre en costos de herramientas. La impresión 3D permite la
            producción bajo demanda, lo que reduce los residuos y hace que la
            fabricación de lotes pequeños sea más asequible.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
