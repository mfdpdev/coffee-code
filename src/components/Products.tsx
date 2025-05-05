import { TbRosetteDiscountFilled } from "react-icons/tb";

export default function Products(){
  const data: number[] = [1,2,3,4,5,6];
  return (
    <>
      <div className="w-full p-2 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

      {data.map( (e, i) => {
        return (
          <div key={i}>
            <div className="relative h-62 w-full shadow-lg rounded-xl border-6 border-white bg-cover bg-center bg-[url(https://images.pexels.com/photos/6119123/pexels-photo-6119123.jpeg)]" >
              <div className="bg-black/70 absolute top-2 left-2 w-fit flex gap-2 px-4 py-2 rounded-full text-white">
                <div className="flex items-center">
                  <TbRosetteDiscountFilled className="text-lg lg:text-xl" />
                </div>
                <p className="text-sm lg:text-md" >50 % off - $2.50</p>
              </div>
            </div>
            <div className="mx-2">
              <div className="flex justify-between mt-4 text-slate-600" >
                <h2 className="font-bold text-[#6F4E37] md:text-lg" >Expresso</h2>
                <p>$5.00</p>
              </div>
              <p className="text-slate-600 mt-4">
                Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet
              </p>
              <div className="flex gap-2 mt-4">
                <span className="text-white bg-[#6f4e37] px-2 py-1 rounded-xl text-sm" >Category 1</span>
                <span className="text-white bg-[#6f4e37] px-2 py-1 rounded-xl text-sm" >Category 1</span>
                <span className="text-white bg-[#6f4e37] px-2 py-1 rounded-xl text-sm" >Category 1</span>
              </div>
            </div>
          </div>
        )
      })}

      </div>
    </>
  )
}
