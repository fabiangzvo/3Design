"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { faGem, faLightbulb } from "@fortawesome/free-regular-svg-icons";
import {
  faGift,
  faHouseChimney,
  faPaintBrush,
  faPalette,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const Button = dynamic(() => import("@components/button"));

function CustomPrint() {
  const router = useRouter();

  const handleContact = useCallback(() => router.push("/contact"), [router]);

  return (
    <section
      id="custom-print"
      className="w-full flex justify-center py-20 px-36 max-md:px-4"
    >
      <div className="w-full grid items-center gap-4 px-4 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Servicios de impresión y diseño personalizado
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 text-lg">
            Déjanos hacer realidad tus ideas. Nuestro equipo de diseñadores y
            expertos en impresión 3D puede crear productos personalizados
            adaptados a sus necesidades.
          </p>
        </div>
        <div className="mx-auto grid mt-8 items-start gap-24 max-md:grid-cols-1 lg:grid-cols-3">
          <div className="grid gap-3">
            <div className="w-full flex justify-center items-center">
              <FontAwesomeIcon size="xl" icon={faGift} className="mr-2" />
              <FontAwesomeIcon size="xl" icon={faGem} />
            </div>
            <h3 className="text-2xl font-bold">
              Regalos y accesorios personalizados
            </h3>
            <p className="text-lg text-gray-500">
              Cree regalos únicos e inolvidables, desde fundas para teléfonos
              personalizadas hasta joyas personalizadas.
            </p>
          </div>
          <div className="grid gap-3">
            <div className="w-full flex justify-center items-center">
              <FontAwesomeIcon size="xl" icon={faRocket} className="mr-2" />
              <FontAwesomeIcon size="xl" icon={faLightbulb} />
            </div>
            <h3 className="text-2xl font-bold">
              Innovación y creación de prototipos
            </h3>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Haga realidad sus ideas rápidamente con nuestros servicios rápidos
              de creación de prototipos. Perfecto para inventores, emprendedores
              y empresas.
            </p>
          </div>
          <div className="grid gap-3">
            <div className="w-full flex justify-center items-center">
              <FontAwesomeIcon size="xl" icon={faPalette} className="mr-2" />
              <FontAwesomeIcon size="xl" icon={faHouseChimney} />
            </div>
            <h3 className="text-2xl font-bold">
              Decoración y diseño del hogar
            </h3>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Eleve su espacio vital con una decoración personalizada para el
              hogar. Hagamos realidad su visión.
            </p>
          </div>
          <div className="grid md:col-start-2 gap-3">
            <div className="w-full flex justify-center items-center">
              <FontAwesomeIcon size="xl" icon={faPaintBrush} className="mr-2" />
              <FontAwesomeIcon size="xl" icon={faPalette} />
            </div>
            <h3 className="text-2xl font-bold">Esculturas y arte</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Convierte tu imaginación en realidad con nuestras impresiones de
              alta precisión. Descubre cómo dar vida a tus esculturas y piezas
              de arte de forma única.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Button label="Contactar" onClick={handleContact} animate />
        </div>
      </div>
    </section>
  );
}

export default CustomPrint;
