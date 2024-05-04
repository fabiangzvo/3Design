import Main from "./components/home";
import Products from "./components/products";
import CustomPrint from "./components/customPrint";
import PartsAndMaterials from "./components/partsAndMaterials";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen max-md:flex-col max-md:justify-start">
      <Main />
      <Products />
      <CustomPrint />
      <PartsAndMaterials />
    </main>
  );
}
