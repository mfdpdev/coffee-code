import { GoStarFill } from "react-icons/go";

export default function Testimonial(){
  const data: number[] = [1,2,3];
  return (
    <>
      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 mx-auto mt-2">
      {data.map( (_, i) => {
        return (
          <div key={i} className="mt-8 rounded-xl p-8 shadow-md bg-black/2 ">
            <div className="">
              <div className="flex gap-2 text-[#6F4E37] text-2xl">
                <GoStarFill />  
                <GoStarFill />  
                <GoStarFill />  
                <GoStarFill />  
                <GoStarFill />  
              </div>
              <h1 className="font-bold text-[#6F4E37] text-3xl my-5">
                "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
              </h1>
              <div className="flex gap-4 items-center">
                <div className="bg-slate-400 w-10 h-10 rounded-full overflow-hidden">
                  <img alt="" src="https://plus.unsplash.com/premium_photo-1723924888644-605796123e3d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
                <div className="text-slate-600">
                  <h1 className="font-bold text-slate-700">John Doe</h1>
                  <p>Coffe Enthusiast</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        )
      })}
      </div>
    </>
  )
}
