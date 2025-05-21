import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

interface Props {
  value: any;
}

export default function Navbar<Props>({ value }){

  return (
    <>
      <div className={`h-18 w-full fixed bg-white/75 backdrop-blur-sm z-[999] top-0 left-0 grid place-center`}>
        <div className="flex justify-between items-center mx-8 sm:mx-16 my-2 gap-6 sm:gap-0">
          <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} className="cursor-pointer grow sm:flex-none" >
            <h1 className="font-bold text-xl text-[#6F4E37]" >Coffee Code</h1>
          </div>
          <div className="hidden sm:flex items-center gap-8 md:gap-12 text-lg" >
            <a href="#aboutus" className="text-slate-600 cursor-pointer hover:text-[#6F4E37]" >About us</a>
            <a href="#menu" className="text-slate-600 cursor-pointer hover:text-[#6F4E37]" >Menu</a>
            <p className="text-slate-600 cursor-pointer hover:text-[#6F4E37]" >Locations</p>
          </div>
          <div onClick={() => {
            value.setCart(!value.cart)
            value.setNavbar(false);
          }} className="cursor-pointer" >
            <CiShoppingCart className="text-3xl text-slate-400 hover:text-[#6F4E37]" />
          </div>
          <div className="sm:hidden" >
            <button id="hamburger" className="cursor-pointer block group" type="button" onClick={() => {
              value.setNavbar(!value.navbar);
              value.setCart(false);
            }}>
              <span className={`hamburger-line origin-top-left ${value.navbar ? "rotate-45" : ""}`} ></span>
              <span className={`hamburger-line ${value.navbar ? "scale-0" : ""}`} ></span>
              <span className={`hamburger-line origin-bottom-left ${value.navbar ? "-rotate-45" : ""}`} ></span>
            </button>
          </div>
        </div>
      </div>
      <div className={`sm:hidden fixed flex gap-4 flex-col ${value.navbar ? "right-0" :"-right-full"} duration-700 transition-all pb-22 p-4 z-999 h-screen w-full sm:w-1/2 lg:w-3/8 xl:w-1/4 bg-white shadow`}>
        <div className="flex flex-col gap-4 md:gap-12 text-lg" >
          <a href="#aboutus" className="text-slate-600 cursor-pointer hover:text-[#6F4E37]" >About us</a>
          <a href="#menu" className="text-slate-600 cursor-pointer hover:text-[#6F4E37]" >Menu</a>
          <p className="text-slate-600 cursor-pointer hover:text-[#6F4E37]" >Locations</p>
        </div>
      </div>
    </>
  )
}
