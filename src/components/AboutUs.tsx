export default function AboutUs(){
  return (
    <>
      <div id="aboutus" className="w-full bg-[#6F4E37] p-8 text-white rounded-xl my-14 ">
        <div className="mx-auto flex flex-col items-center justify-between gap-4 md:gap-6 w-fit">
          <div className="text-center w-1/2 font-bold text-3xl md:text-4xl">
            <h1>Discover Our Menu Coffe Lovers Unite</h1>
          </div>
          <div className="text-center w-2/3 md:text-lg">
            <p>Experience the rich, aromatic flavors of our carefully handcrafted coffee and become a part of our welcoming and vibrant community today.</p>
          </div>
          <div className="flex gap-4 w-fit mt-4 text-sm md:text-lg">
            <button className="rounded-full px-4 py-2 bg-white text-[#6f4e37] cursor-pointer" type="button" >Order Now</button>
            <button className="rounded-full px-4 py-2 border-white border cursor-pointer" type="button" >Order Now</button>
          </div>
        </div>
      </div>
    </>
  )
}
