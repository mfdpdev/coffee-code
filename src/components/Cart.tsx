interface Props {
  value: any
}

export default function Cart<Props>({ value }){
  const data: number[] = [1,2,3,4,5];
  return (
    <>
      <div className={`fixed flex gap-4 flex-col ${value.cart ? "right-0" :"-right-full"} duration-700 transition-all pb-22 p-4 z-999 h-screen w-full sm:w-1/2 lg:w-3/8 xl:w-1/4 bg-white shadow`}>
        {data.length < 1 ? (
          <div className="h-full">
            Kosong
          </div>
        )
        :
        (
          <>
            <div className="flex flex-col gap-y-8 grow overflow-y-auto">
            {data.map( (e, i) => {
              return (
                <div key={i} className="flex items-center gap-4 w-full">
                  <input type="checkbox" />
                  <div className="w-20 h-20 overflow-hidden rounded-xl">
                    <img src="https://images.pexels.com/photos/6119123/pexels-photo-6119123.jpeg" alt="" />
                  </div>
                  <div className="grow text-slate-600">
                    <h2 className="font-bold">Nike</h2>
                    <p className="text-slate-500">Description</p>
                    <div className="flex justify-between w-full">
                      <h2 className="font-bold">$250.00</h2>
                      <div className="flex gap-4">
                        <button className="px-3 bg-slate-200 text-slate-500 rounded">-</button>
                        <p>1</p>
                        <button className="px-3 bg-[#6F4E37] text-white rounded">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            </div>
            <div className="flex flex-col gap-2 border border-slate-200 rounded-xl text-slate-600 font-bold p-4">
              <h1>Payment Summary</h1> 
              <div className="flex justify-between">
                <h3>Price</h3>
                <div>$134.00</div>
              </div>
              <div className="flex justify-between">
                <h3>Taxes</h3>
                <div>$134.00</div>
              </div>
              <div className="flex justify-between">
                <h3>Discount</h3>
                <div>$134.00</div>
              </div>
              <hr className="text-slate-200" />
              <div className="flex justify-between">
                <h3>Total</h3>
                <div>$134.00</div>
              </div>
            </div>
            <button className="bg-[#6F4E37] text-white py-3 rounded-xl font-bold">Checkout</button>
          </>
        )}
      </div>
    </>
  )
}
