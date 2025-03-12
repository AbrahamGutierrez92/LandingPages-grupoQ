"use client"
import Image from "next/image";
import bannercr from "../Imagenes/CRBanner2.png";
import bannercrmovil from "../Imagenes/CRBanner-Movil.png";
import { FaCar } from "react-icons/fa";
import hyunday from "../Imagenes/hyundai.webp";
import cadillac from "../Imagenes/cadillac.webp";
import chevrolet from "../Imagenes/chevrolet.webp";
import isuzu from "../Imagenes/isuzu.webp";
import bannepro from "../Imagenes/Marcas.webp";
import atencion from "../Imagenes/atencion.webp";
import ArcFox from "../Imagenes/ArcFox.webp";
import logoq from "../Imagenes/logoq.webp";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoIosAppstore } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className="w-full h-full min-md:h-[600px]">
        <Image
          className="flex w-full h-full min-md:hidden"
          src={bannercrmovil}
          alt="ExpoMovil Movil"
        />
        <Image
          className="hidden min-md:flex min-md:w-full min-md:h-full"
          src={bannercr}
          alt="ExpoMovil Banner"
        />
      </div>

      <a
        href="/"
        className="w-full h-16 gap-3 flex items-center justify-center bg-[#0E5097] hover:bg-[#1473b9] cursor-pointer"
      >
        <FaCar className="text-3xl" />
        <h1 className="text-xl font-semibold min-md:text-3xl">
          Solicitar prueba de manejo
        </h1>
      </a>

      <div className="w-full mt-9 mb-9 px-6 min-md:px-6 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-[#0E5097] text-center font-semibold text-[40px] min-md:text-7xl">
            Conoce nuestras marcas
          </h2>
          <p className="font-semibold text-[#5E5F5F] text-center text-[25px] min-md:text-3xl">
            Encuentra tu vehículo ideal al mejor precio
          </p>
        </div>

        <div className="w-full mt-11 mb-11 m-auto flex justify-between items-center flex-wrap  min-xl:flex-nowrap">
          <div className="w-full m-auto mt-11 flex items-center justify-center">
            <div className="w-[60%] h-full flex items-center justify-center flex-col">
              <Image
                className="w-full h-full object-cover"
                src={hyunday}
                alt="hyundai"
              />

              <div className="mt-7">
                <a
                  href="/"
                  className="w-1/2 text-2xl font-semibold px-6 py-3 bg-white rounded-2xl border-2 text-[#0E5097] border-[#0E5097] hover:bg-[#0E5097] hover:text-white"
                >
                  Visita
                </a>
              </div>
            </div>
          </div>

          <div className="w-full mt-11 flex items-center justify-center">
            <div className="w-[60%] h-full flex items-center justify-center flex-col">
              <Image
                className="w-full h-full object-cover"
                src={cadillac}
                alt="cadillac"
              />

              <div className="mt-7">
                <a
                  href="/"
                  className="w-1/2 text-2xl font-semibold px-6 py-3 bg-white rounded-2xl border-2 text-[#0E5097] border-[#0E5097] hover:bg-[#0E5097] hover:text-white"
                >
                  Visita
                </a>
              </div>
            </div>
          </div>

          <div className="w-full mt-11 flex items-center justify-center">
            <div className="w-[60%] h-full flex items-center justify-center flex-col">
              <Image
                className="w-full h-full object-cover"
                src={chevrolet}
                alt="hyundai"
              />

              <div className="mt-7">
                <a
                  href="/"
                  className="w-1/2 text-2xl font-semibold px-6 py-3 bg-white rounded-2xl border-2 text-[#0E5097] border-[#0E5097] hover:bg-[#0E5097] hover:text-white"
                >
                  Visita
                </a>
              </div>
            </div>
          </div>

          <div className="w-full mt-11 flex items-center justify-center">
            <div className="w-[60%] h-full flex items-center justify-center flex-col">
              <Image
                className="w-full h-full object-cover"
                src={isuzu}
                alt="isuzu"
              />

              <div className="mt-7">
                <a
                  href="/"
                  className="w-1/2 text-2xl font-semibold px-6 py-3 bg-white rounded-2xl border-2 text-[#0E5097] border-[#0E5097] hover:bg-[#0E5097] hover:text-white"
                >
                  Visita
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-11 mb-11">
        <Image src={bannepro} alt="banner Marcas" />
      </div>

      <div className="w-full mt-9 mb-9 px-6 min-md:px-6 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-[#0E5097] text-center font-semibold text-[40px] min-md:text-7xl">
            CrediQ
          </h2>
          <p className="font-semibold text-[#5E5F5F] text-center text-[25px] min-md:text-3xl">
            Financiamiento flexible y garantía extendida
          </p>
        </div>

        <div className="w-full mt-12 min-md:mt-28 min-md:mb-11 flex items-center justify-between flex-col min-sm:flex-row  min-md:flex-row">
          <div className="w-full mb-11 min-md:mb-0 min-md:w-[45%] flex items-center justify-center flex-col">
            <p className="text-[#5E5F5F] text-center text-[25px] min-md:text-3xl">
              CrediQ es la financiera líder en financiamiento de vehículos
              nuevos y usados.
            </p>

            <p className="text-[#5E5F5F] text-center text-[25px] min-md:text-3xl mt-9">
              Con más de 60 años de experiencia, CrediQ te ofrece un completo
              abanico de soluciones financieras adaptadas a las necesidades de
              nuestros clientes.  
              <span className="text-[#0E5097] font-semibold"><a href="https://crediq.com/cr/">ir a CrediQ</a></span>
            </p>
          </div>

          <div className="w-full min-md:w-[50%]">
            <Image className="object-cover" src={atencion} alt="atencion" />
          </div>
        </div>
      </div>

      <div className="w-full mt-11 mb-11 px-6 min-md:px-6 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-[#0E5097] text-center font-semibold text-[50px] min-md:text-7xl">
            Contáctanos
          </h2>
        </div>

        <div className="w-full mt-11 mb-11 flex justify-center items-center">
          <div className="w-full min-md:w-[70%] flex justify-center items-center">
            <form className="w-full">
              <div className="flex flex-col min-md:flex-row justify-between items-center gap-8">
                <input
                  className="w-full min-md:w-[50%] h-16 placeholder-[#878787] px-5 text-3xl font-semibold bg-white shadow-xl rounded-xl text-black"
                  type="text"
                  placeholder="Nombre"
                />
                <input
                  className="w-full min-md:w-[50%] h-16 placeholder-[#878787] px-5 text-3xl font-semibold bg-white shadow-xl rounded-xl text-black"
                  type="text"
                  placeholder="Correo"
                />
              </div>

              <div className="flex mt-11 mb-11 justify-between items-center gap-8">
                <input
                  className="w-[100%] h-64 placeholder-[#878787] px-5 text-3xl font-semibold bg-white shadow-xl rounded-xl text-black"
                  type=""
                  placeholder="Mensaje"
                />
              </div>

              <div className="flex w-full mt-11 mb-11 justify-between items-center gap-8">
                <button
                  className="w-[100%] h-16  px-5 text-3xl font-semibold bg-[#0E5097] hover:bg-[#0e3e97] shadow-xl rounded-xl"
                  type="sumit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full mt-11">
        <Image className="object-cover" src={ArcFox} alt="banner Marcas" />
      </div>

      <div className="px-6 p-5 w-full h-full min-md:h-[400px] bg-[#212529] flex justify-center items-center">
        <div className="w-full h-full xl:w-full min-md:w-[100%] flex-col min-md:flex-row flex justify-between items-center">
          <div className="w-full mb-16 min-md:mb-0  min-md:h-[30%] min-md:w-[35%] flex items-center justify-center">
            <Image className="object-cover" src={logoq} alt="logo footer" />
          </div>

          <div className="w-full mb-16 min-md:mb-0 min-md:w-[35%] flex items-center justify-center flex-col">
            <h3 className="text-white text-5xl min-md:text-4xl font-semibold">
              Contáctanos
            </h3>
            <div className="mt-3.5">
              <p className="text-white">
                <span className="text-white font-semibold">Telefono: </span>
                +50625227474
              </p>
            </div>
            <div>
              <p className="text-white">
                <span className="text-white font-semibold">WhatsApp: </span>
                 (506) 7300-1212
              </p>
            </div>

            <div>
              <p className="text-white ">
                <span className="text-white font-semibold">Email: </span>
                contactanos.cr@grupoq.com
              </p>
            </div>
          </div>

          <div className="w-full min-md:w-[35%] flex items-center justify-center flex-col">
            <h3 className="text-white text-5xl min-md:text-4xl font-semibold">
              Encuéntranos
            </h3>

            <div className="w-full flex items-center justify-center gap-12 mt-9">
              <a href="https://www.facebook.com/MiGrupoQ/?locale=es_LA">
                <FaFacebook className="w-11 h-11 text-white hover:text-blue-700" />
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.migrupoq.app&pli=1">
                <IoLogoGooglePlaystore className="w-11 h-11 text-white hover:text-emerald-500" />
              </a>

              <a href="https://apps.apple.com/us/app/mi-grupo-q/id972874159">
                <IoIosAppstore className="w-12 h-12 text-white hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#161718] p-5 flex justify-center items-center">
        <h6>GrupoQ 2025 - Todos los derechos reservados</h6>
      </div>
    </>
  );
}
