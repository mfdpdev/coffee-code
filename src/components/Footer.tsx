import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer(){
  return (
    <>
      <div className="flex flex-col gap-6 mt-8">
        <div className="flex justify-between">
          <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} className="cursor-pointer" >
            <h1 className="font-bold text-xl text-[#6F4E37]" >Coffee Code</h1>
          </div>
          <div className="hidden lg:flex items-center gap-8 md:gap-12 text-lg" >
            <p className="text-slate-600 cursor-pointer hover:text-[#6F4E37]" >About us</p>
            <p className="text-slate-600 cursor-pointer hover:text-[#6F4E37]" >Menu</p>
            <p className="text-slate-600 cursor-pointer hover:text-[#6F4E37]" >Locations</p>
          </div>
          <div className="flex gap-2 text-xl items-center">
            <IoLogoLinkedin />
            <IoLogoInstagram />
            <FaXTwitter />
          </div>
        </div>
        <div>
          <hr className="text-slate-200 mx-3" />
        </div>
        <div className="flex items-center justify-center gap-8 md:gap-12 text-xs md:text-sm mb-6" >
          <p className="text-slate-600 cursor-pointer hover:text-[#6F4E37]" >Copyright @ 2025 Coffee Code. All rights reserved.</p>
          <p className="text-slate-600 cursor-pointer hover:text-[#6F4E37]" >Privacy Policy</p>
          <p className="text-slate-600 cursor-pointer hover:text-[#6F4E37]" >Term and Conditions</p>
          <p className="text-slate-600 cursor-pointer hover:text-[#6F4E37]" >Cookie Settings</p>
        </div>
      </div>
    </>
  )
}
