"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Image, Card, CardHeader, CardBody } from "@nextui-org/react";

const Button = dynamic(() => import("@components/button"));

function PartsAndMaterials() {
  const router = useRouter();

  const handleClick = useCallback(() => router.push("/store"), [router]);

  return (
    <section
      id="parts-and-materials"
      className="w-full flex justify-center py-20 md:py-24 lg:py-20 bg-gray-100 px-36 max-md:px-4"
    >
      <div className="w-full flex flex-col items-center px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#F54180_0%,#4776E6_50%,#F54180_100%)] text-sm text-white">
              <span className="font-bold inline-flex rounded-lg h-full w-full cursor-pointer items-center justify-center transition-background px-3 py-1 text-lg backdrop-blur-3xl bg-transparent text-white">
                Respuestos Destacados
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Tienda de repuestos y materiales
            </h2>
            <p className="max-w-[900px] text-gray-500 text-lg">
              Equipa tu impresora 3D con los mejores repuestos y materiales
              disponibles. Descubre nuestra tienda especializada en impresión 3D
              y lleva tus creaciones al siguiente nivel.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4 gap-6 py-12">
          <Card>
            <CardHeader>
              <Image
                alt="Filament"
                className="mx-auto h-80 aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                src="/filament.webp"
              />
            </CardHeader>
            <CardBody>
              <h3 className="text-xl font-bold">Filamento EPLA - 1.75MM</h3>
              <p className="text-gray-500 text-lg py-4">
                Filamento ePLA - SILK premium de alta calidad en carrete de 1kg.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$140.000 COP</span>
                <Button label="Comprar" onClick={() => {}} />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Image
                alt="Boquillas"
                className="mx-auto h-80 aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                src="/nozzle.webp"
              />
            </CardHeader>
            <CardBody>
              <h3 className="text-xl font-bold">Boquillas Creality </h3>
              <p className="text-gray-500 text-lg py-4">
                Boquillas de impresoras Creality de 0.2/0.3/0.4/0.6/0.8/1.0/1.2
                MM
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$17.000 COP</span>
                <Button label="Comprar" onClick={() => {}} />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Image
                alt="Laca"
                className="mx-auto h-80 aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                src="/lacquer.webp"
              />
            </CardHeader>
            <CardBody>
              <h3 className="text-xl font-bold">Laca</h3>
              <p className="text-gray-500 text-lg py-4">
                Laca adhesiva para impresión 3d - 3DLAC STICK
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$50.000 COP</span>
                <Button label="Comprar" onClick={() => {}} />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Image
                alt="Bloque calefactor"
                className="mx-auto h-80 aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                src="/heating-block.webp"
              />
            </CardHeader>
            <CardBody>
              <h3 className="text-xl font-bold">Bloque calefactor</h3>
              <p className="text-gray-500 text-lg py-4">
                bloquie calefactor de aluminio para impresora Artillery
                X1/GENIUS
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$30.000 COP</span>
                <Button label="Comprar" onClick={() => {}} />
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="w-1/4">
          <Button label="Ir a la tienda" onClick={handleClick} />
        </div>
      </div>
    </section>
  );
}

export default PartsAndMaterials;
