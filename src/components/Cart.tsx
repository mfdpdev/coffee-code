import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useData } from "../context/DataContext";

export default function Cart({ value }: { value: {cart: boolean }}){
  const { cartItems, increaseItemQuantity, decreaseItemQuantity, getPaymentSummary } = useCart();
  const { data } = useData();
  const [paymentSummary, setPaymentSummary] = useState<{ price: number, taxes: number, discount: number, total: number } | null>(null);
    
  const handlePayment = async () => {
    const items = cartItems.map( (e, i) => {
      return {
        id: data[i].id,
        price: data[i].price,
        quantity: e.quantity,
        name: data[i].name,
      }
    })

    try {
      const response = await fetch("http://localhost:3000/v1/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          total: paymentSummary?.total,
          items,
        })
      });

      const { token } = await response.json();

      window.snap.pay(token, {
        onSuccess: function(result) {
          alert("Payment Success: " + JSON.stringify(result));
        },
        onPending: function(result) {
          alert("Payment Pending: " + JSON.stringify(result));
        },
        onError: function(result) {
          alert("Payment Error: " + JSON.stringify(result));
        },
        onClose: function() {
          alert("You closed the popup without finishing the payment");
        }
      });
    } catch (error) {
      console.error("Error during payment:", error);
    }
  }

  useEffect(() => {
    setPaymentSummary(getPaymentSummary());
  }, [cartItems]);

  return (
    <>
      <div className={`fixed flex gap-4 flex-col ${value.cart ? "right-0" :"-right-full"} duration-700 transition-all pb-22 p-4 z-999 h-dvh w-full sm:w-1/2 lg:w-3/8 xl:w-1/4 bg-white shadow`}>
        {cartItems.length < 1 ? (
          <div className="h-full">
            Kosong
          </div>
        )
        :
        (
          <>
            <div className="flex flex-col gap-y-8 grow overflow-y-auto">
            {cartItems.map( (e, i) => {
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
                        <button onClick={() => decreaseItemQuantity(e.id)} className="px-3 bg-slate-200 text-slate-500 rounded cursor-pointer">-</button>
                        <p>{e.quantity}</p>
                        <button onClick={() => increaseItemQuantity(e.id)} className="px-3 bg-[#6F4E37] text-white rounded cursor-pointer">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            </div>
            <div className="flex flex-col gap-2 border border-slate-200 rounded-xl text-slate-600 font-bold p-4 text-sm md:text-base">
              <h1>Payment Summary</h1> 
              <div className="flex justify-between">
                <h3>Price</h3>
                <div>{paymentSummary?.price}</div>
              </div>
              <div className="flex justify-between">
                <h3>Taxes</h3>
                <div>{paymentSummary?.taxes}</div>
              </div>
              <div className="flex justify-between">
                <h3>Discount</h3>
                <div>{paymentSummary?.discount}</div>
              </div>
              <hr className="text-slate-200" />
              <div className="flex justify-between">
                <h3>Total</h3>
                <div>{paymentSummary?.total}</div>
              </div>
            </div>
            <button onClick={handlePayment} className="bg-[#6F4E37] text-white py-3 rounded-xl font-bold cursor-pointer">Checkout</button>
          </>
        )}
      </div>
    </>
  )
}
