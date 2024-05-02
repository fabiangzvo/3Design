"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Image, Card, CardHeader, CardBody } from "@nextui-org/react";
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
  const handleContact = useCallback(() => router.push("/contact"), [router]);

  return (
    <main className="w-full flex flex-col min-h-screen px-20 max-md:flex-col max-md:justify-start max-md:px-4">
      <section className="w-full flex min-h-[90vh] justify-between max-md:flex-col max-md:justify-start max-md:px-4">
        <div className="w-3/5 flex justify-center items-center max-md:w-full max-md:mt-5">
          <Image
            src="/print.jpg"
            alt="3d-print"
            className="h-[80vh] max-md:h-[30vh]"
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
      </section>
      <div className="w-full mt-4 flex justify-between items-start mb-8 max-md:flex-col">
        <div className="flex flex-col items-center w-1/3 p-4 max-md:w-full">
          <FontAwesomeIcon size="3x" icon={faLightbulb} />
          <span className="text-3xl text-center font-bold mb-4 mt-2">
            Libertad de diseño
          </span>
          <p className="text-center text-lg">
            Deje que su imaginación vuele. Nuestras piezas personalizadas
            impresas en 3D permiten diseños intrincados y geometrías complejas.
          </p>
        </div>
        <div className="flex flex-col items-center w-1/3 p-4 max-md:w-full">
          <FontAwesomeIcon size="3x" icon={faRocket} />
          <span className="text-3xl text-center font-bold mb-4 mt-2">
            Creación rápida de prototipos
          </span>
          <p className="text-center text-lg">
            Acelere el ciclo de desarrollo de su producto. Con la impresión 3D,
            puede crear prototipos rápidamente e iterar diseños.
          </p>
        </div>
        <div className="flex flex-col items-center w-1/3 p-4 max-md:w-full">
          <FontAwesomeIcon size="3x" icon={faIndustry} />
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
      <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#F54180_0%,#4776E6_50%,#F54180_100%)] text-sm text-white">
                <span className="font-bold inline-flex rounded-lg h-full w-full cursor-pointer items-center justify-center transition-background px-3 py-1 text-lg backdrop-blur-3xl bg-transparent text-white">
                  Productos Destacados
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Explore nuestra colección diversa
              </h2>
              <p className="max-w-[900px] text-gray-500 text-lg">
                Desde decoración del hogar hasta accesorios tecnológicos,
                nuestros productos impresos en 3D ofrecen infinitas
                posibilidades de personalización y creatividad.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12">
            <Card>
              <CardHeader>
                <Image
                  alt="Product"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  src="/vase.jpg"
                />
              </CardHeader>
              <CardBody>
                <h3 className="text-xl font-bold">Florero decorativo</h3>
                <p className="text-gray-500 text-lg py-4">
                  Un jarrón impreso en 3D único para tu hogar.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$29.99</span>
                  <Button label="Comprar" onClick={() => {}} />
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  alt="gemotric-plant"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  src="/geometric-planter.jpeg"
                />
              </CardHeader>
              <CardBody>
                <h3 className="text-xl font-bold">Jardinera Geométrica</h3>
                <p className="text-gray-500 text-lg py-4">
                  Una moderna jardinera impresa en 3D para tu hogar.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$39.99</span>
                  <Button label="Comprar" onClick={() => {}} />
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  alt="Product"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  src="/desk-organizer.png"
                />
              </CardHeader>
              <CardBody>
                <h3 className="text-xl font-bold">Organizador de escritorio</h3>
                <p className="text-gray-500 text-lg py-4">
                  Un funcional organizador de escritorio impreso en 3D.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$24.99</span>
                  <Button label="Comprar" onClick={() => {}} />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center py-12 ">
        <div className="container grid items-center gap-4 px-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Servicios de impresión y diseño personalizado
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 text-lg">
              Déjanos hacer realidad tus ideas. Nuestro equipo de diseñadores y
              expertos en impresión 3D puede crear productos personalizados
              adaptados a sus necesidades.
            </p>
          </div>
          <div className="mx-auto grid mt-8 max-w-5xl items-start gap-6 sm:grid-cols-2 lg:max-w-3xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-2xl font-bold">
                Regalos y accesorios personalizados
              </h3>
              <p className="text-lg text-gray-500">
                Cree regalos únicos e inolvidables, desde fundas para teléfonos
                personalizadas hasta joyas personalizadas.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-2xl font-bold">
                Innovación y creación de prototipos
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Haga realidad sus ideas rápidamente con nuestros servicios
                rápidos de creación de prototipos. Perfecto para inventores,
                emprendedores y empresas.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-2xl font-bold">
                Decoración y diseño del hogar a medida
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Eleve su espacio vital con una decoración personalizada para el
                hogar. Hagamos realidad su visión.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-2xl font-bold">
                Innovación y creación rápida de prototipos
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Haga realidad sus ideas rápidamente con nuestros servicios
                rápidos de creación de prototipos. Perfecto para inventores,
                emprendedores y empresas.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-2xl font-bold">
                Decoración y diseño del hogar a medida
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Eleve su espacio vital con una decoración personalizada para el
                hogar. Hagamos realidad su visión.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-2xl font-bold">
                Regalos y accesorios personalizados
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Cree regalos únicos e inolvidables, desde fundas para teléfonos
                personalizadas hasta joyas personalizadas.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button label="Contactar" onClick={handleContact} animate />
          </div>
        </div>
      </section>
    </main>
  );
}
