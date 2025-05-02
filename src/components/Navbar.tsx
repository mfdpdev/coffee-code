import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

export default function Navbar(){
  const [isButtonActive, setButton] = useState<boolean>(false);

  return (
    <>
      <div className={`h-18 w-full fixed bg-white/75 backdrop-blur-sm z-[999] top-0 left-0 grid place-center`}>
        <div className="flex justify-between items-center mx-8 sm:mx-16 my-2">
          <div className="cursor-pointer" >
            <h1 className="font-bold text-xl text-[#6F4E37]" >Coffee Code</h1>
          </div>
          <div className="hidden sm:flex items-center gap-8 md:gap-12 text-lg" >
            <p className="text-slate-600 cursor-pointer hover:text-[#6F4E37]" >About us</p>
            <p className="text-slate-600 cursor-pointer hover:text-[#6F4E37]" >Menu</p>
            <p className="text-slate-600 cursor-pointer hover:text-[#6F4E37]" >Locations</p>
          </div>
          <div className="hidden sm:block cursor-pointer" >
            <CiShoppingCart className="text-3xl text-slate-400 hover:text-[#6F4E37]" />
          </div>
          <div className="sm:hidden" >
            <button id="hamburger" className="cursor-pointer block group" type="button" onClick={() => {
              setButton(!isButtonActive);
            }}>
              <span className={`hamburger-line origin-top-left ${isButtonActive ? "rotate-45" : ""}`} ></span>
              <span className={`hamburger-line ${isButtonActive ? "scale-0" : ""}`} ></span>
              <span className={`hamburger-line origin-bottom-left ${isButtonActive ? "-rotate-45" : ""}`} ></span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
