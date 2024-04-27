"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Image } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faRocket,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";

const Button = dynamic(() => import("@components/button"));

export default function Home() {
  const router = useRouter();

  const handleClick = useCallback(() => router.push("/store"), [router]);

  return (
    <main className="flex flex-col min-h-screen px-20 max-md:flex-col max-md:justify-start max-md:px-4">
      <div className="flex min-h-[95vh] justify-between max-md:flex-col max-md:justify-start max-md:px-4">
        <div className="w-3/5 flex justify-center items-center max-md:w-full max-md:mt-5">
          <Image src="/start-print.jpg" alt="3d-print" />
        </div>
        <div className="w-2/5 flex flex-col justify-center px-10 max-md:w-full max-md:p-4">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Diseños únicos, hechos para ti
          </h1>
          <p className="mb-8 text-center">
            Descubre un mundo de creatividad con nuestra experiencia en
            impresión 3D. Desde diseños complejos hasta soluciones prácticas,
            hacemos realidad sus ideas.
          </p>
          <Button label="Ver catálogo" onClick={handleClick} />
        </div>
      </div>
      <div className="w-full mt-6 flex justify-between items-start mb-8 max-md:flex-col">
        <div className="flex flex-col items-center w-1/3 p-4 max-md:w-full">
          <FontAwesomeIcon className="text-5xl" icon={faLightbulb} />
          <span className="text-3xl text-center font-bold mb-4 mt-2">
            Libertad de diseño
          </span>
          <p className="text-center">
            Deje que su imaginación vuele. Nuestras piezas personalizadas
            impresas en 3D permiten diseños intrincados y geometrías complejas.
          </p>
        </div>
        <div className="flex flex-col items-center w-1/3 p-4 max-md:w-full">
          <FontAwesomeIcon className="text-5xl" icon={faRocket} />
          <span className="text-3xl text-center font-bold mb-4 mt-2">
            Creación rápida de prototipos
          </span>
          <p className="text-center">
            Acelere el ciclo de desarrollo de su producto. Con la impresión 3D,
            puede crear prototipos rápidamente e iterar diseños.
          </p>
        </div>
        <div className="flex flex-col items-center w-1/3 p-4 max-md:w-full">
          <FontAwesomeIcon className="text-5xl" icon={faIndustry} />
          <span className="text-3xl text-center font-bold mb-4 mt-2">
            Produción rentable
          </span>
          <p className="text-center">
            Ahorre en costos de herramientas. La impresión 3D permite la
            producción bajo demanda, lo que reduce los residuos y hace que la
            fabricación de lotes pequeños sea más asequible.{" "}
          </p>
        </div>
      </div>
    </main>
  );
}
