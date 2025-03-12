"use client"
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoNotifications } from "react-icons/io5";

const NavIcon = () => {
    const [openPefil, setOpenPerfil] = useState(false);
    //const [] = useState(false);
   
    const router = useRouter();
    const isLoggedIn = false;

    const handlePerfil = () => {
        if(isLoggedIn){
          router.push("/login");
        }
        setOpenPerfil((prev) => !prev);
    }

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
        <FaUser 
         className="w-6 h-6 cursor-poiter"
         onClick={handlePerfil}
        />
        {openPefil && (
            <div className="absolute w-28 p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white z-20 text-center">
              <Link href="https://www.facebook.com/" className="text-gray-900 font-semibold w-28 " onClick={()=>setOpenPerfil(false)}>Perfil</Link>
            </div>
        )}

       <IoNotifications
       className="cursor-pointer w-6 h-6" 
       />

    </div>
  )
}

export default NavIcon;