"use client";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";

const MenuNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <IoMenu
        className="w-9 h-11 cursor-pointer"
        onClick={() => setOpenMenu((e) => !e)}
      />

      {openMenu && (
        <div className="absolute bg-[#000d22] text-white left-0 top-19 w-full h-[calc(70vh-20px)] flex flex-col items-center justify-center gap-8 text-xl z-10  transition-all">
          <Link href="/" >Inicio</Link>
          <Link href="https://www.grupoq.com/cr/marcas" target="_blank">Marcas</Link>
          <Link href="https://www.grupoq.com/cr/crediq" target="_blank">Servicios</Link>
          <Link href="https://www.grupoq.com/cr/contacto-sucursal" target="_blank">Contáctanos</Link>
        </div>
      )}
    </div>
  );
};

export default MenuNav;
