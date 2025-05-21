import { TbRosetteDiscountFilled } from "react-icons/tb";


import { PiCoffee } from "react-icons/pi";
import { CiCoffeeCup } from "react-icons/ci";
import { SiBuymeacoffee } from "react-icons/si";

// <div className="text-[12rem] md:text-[20rem] bg-clip-text leading-none absolute top-10 -left-10 bg-linear-to-r from-[#6f4e37] to-white select-none pointer-events-none opacity-10 z-0 whitespace-nowrap font-extrabold text-transparent" >
//   Our
//   <br />
//   Menu
// </div>
export default function Hero(){
  return (
    <>
      <div className="grid grid-rows-2 gap-14 p-6 relative z-10">
        <div className="">
          <div className="text-center font-bold text-4xl sm:text-5xl md:text-6xl text-[#6F4E37]">
            <h1>We deliver nothing but</h1>
            <h1>the finest coffee</h1>
            <h1>experience</h1>
          </div>
          <div className="bg-[#6F4E37] w-fit flex gap-4 m-auto px-4 py-2 rounded-full text-white mt-6">
            <div className="flex items-center">
              <TbRosetteDiscountFilled className="text-xl md:text-2xl" />
            </div>
            <p className="text-base md:text-md lg:text-lg" >50 % off on several items</p>
          </div>
        </div>
        <div id="menu" className="grid grid-rows-2 gap-4 md:gap-6 lg:gap-0">
            <form className="m-auto border-[#6f4e37] border p-1 rounded-full bg-white">
              <input type="text" className="px-4 text-slate-600 caret-slate-600 text-sm md:text-md lg:text-lg border-none focus:outline-none text-md" placeholder="Search here ..." />
              <button type="submit" className="bg-[#6f4e37] text-sm md:text-md lg:text-lg text-white px-4 py-2 cursor-pointer rounded-full" >Search</button>
            </form>
          <div className="flex w-fit gap-8 m-auto text-slate-600 text-sm md:text-md lg:text-lg">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="">
                <PiCoffee className="text-4xl" />
              </div>
              <p>Hot Coffee</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="">
                <CiCoffeeCup className="text-4xl" />
              </div>
              <p>Cup Coffee</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div>
                <SiBuymeacoffee className="text-4xl" />
              </div>
              <p>Cold Coffee</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
