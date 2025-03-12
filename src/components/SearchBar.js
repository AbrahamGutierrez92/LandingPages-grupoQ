"use client";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const router = useRouter();

  return (
    <form className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1 md:w-full">
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />

      <button className="cursor-pointer">
         <FaSearch className="w-4 h-4 text-white"/>
      </button>
    </form>
  );
};

export default SearchBar;
