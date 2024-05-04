"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Image, Card, CardHeader, CardBody } from "@nextui-org/react";

const Button = dynamic(() => import("@components/button"));

function Products() {
  const router = useRouter();

  const handleClick = useCallback(() => router.push("/store"), [router]);

  return (
    <section
      id="catalog"
      className="w-full flex justify-center py-16 md:py-24 lg:py-32 bg-gray-100 px-36 max-md:px-4"
    >
      <div className="w-full flex flex-col items-center px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#F54180_0%,#4776E6_50%,#F54180_100%)] text-sm text-white">
              <span className="font-bold inline-flex rounded-lg h-full w-full cursor-pointer items-center justify-center transition-background px-3 py-1 text-lg backdrop-blur-3xl bg-transparent text-white">
                Productos Destacados
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Explore nuestra colección diversa
            </h2>
            <p className="max-w-[900px] text-gray-500 text-lg">
              Desde decoración del hogar hasta accesorios tecnológicos, nuestros
              productos impresos en 3D ofrecen infinitas posibilidades de
              personalización y creatividad.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4 gap-6 py-12">
          <Card>
            <CardHeader>
              <Image
                alt="Product"
                className="mx-auto h-80 aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                src="/vase.jpg"
              />
            </CardHeader>
            <CardBody>
              <h3 className="text-xl font-bold">Florero decorativo</h3>
              <p className="text-gray-500 text-lg py-4">
                Un jarrón impreso en 3D único para tu hogar.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$30.000 COP</span>
                <Button label="Comprar" onClick={() => {}} />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Image
                alt="gemotric-plant"
                className="mx-auto h-80 aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                src="/geometric-planter.jpeg"
              />
            </CardHeader>
            <CardBody>
              <h3 className="text-xl font-bold">Jardinera Geométrica</h3>
              <p className="text-gray-500 text-lg py-4">
                Una moderna jardinera impresa en 3D para tu hogar.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$39.000 COP</span>
                <Button label="Comprar" onClick={() => {}} />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Image
                alt="Product"
                className="mx-auto h-80 aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                src="/desk-organizer.png"
              />
            </CardHeader>
            <CardBody>
              <h3 className="text-xl font-bold">Organizador de escritorio</h3>
              <p className="text-gray-500 text-lg py-4">
                Un funcional organizador de escritorio impreso en 3D.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$25.000 COP</span>
                <Button label="Comprar" onClick={() => {}} />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Image
                alt="Product"
                className="mx-auto h-80 aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                src="/vase.jpg"
              />
            </CardHeader>
            <CardBody>
              <h3 className="text-xl font-bold">Florero decorativo</h3>
              <p className="text-gray-500 text-lg py-4">
                Un jarrón impreso en 3D único para tu hogar.
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

export default Products;
