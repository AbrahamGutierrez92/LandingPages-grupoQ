import Link from "next/link";
import MenuNav from "./MenuNav";
import Image from "next/image";
import logoq from "../Imagenes/logoGQ.webp";
import cr from "../Imagenes/cr.png";
const NavBar = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center px-6 min-md:px-6 bg-white text-black relative">
      <div className="w-full flex justify-between items-center">
        <div className="">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logoq} width={150} height={100} alt="logo grupo q"/>
          </Link>
        </div>

        <div className="hidden min-md:flex gap-6">
          <Link href="/" className=" text-[#006cb7] hover:text-black font-semibold px-3 py-2.5">
            Inicio
          </Link>
          <Link href="https://www.grupoq.com/cr/marcas" target="_blank" className="text-[#006cb7] hover:text-black font-semibold px-2.5 py-2.5">
            Marcas
          </Link>
          <Link href="https://www.grupoq.com/cr/crediq" target="_blank" className="text-[#006cb7] hover:text-black font-semibold px-2.5 py-2.5" >
            Servicios
          </Link>
          <Link href="https://www.grupoq.com/cr/contacto-sucursal" target="_blank" className="text-[#006cb7] hover:text-black font-semibold px-2.5 py-2.5">
            Contáctanos
          </Link>
        </div>

        <div className="min-md:w-48 flex gap-2.5 min-md:items-center min-md:justify-center">
          <div className="hidden min-md:flex gap-2">
          <Image src={cr} width={40} height={40} alt="logo grupo q"/>
          <p className="font-semibold text-[#797676]">Costa Rica</p>
          </div>

         <div className="flex md:hidden">
           <MenuNav />
         </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
