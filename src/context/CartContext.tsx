import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState<{ id: number, quantity: number }[]>([]);

  function getItemQuantity(id: number){
    return cartItems.find( item => item.id == id)?.quantity || 0;
  }

  function increaseItemQuantity(id: number){
    setCartItems( currItems => {
      if(currItems.find( item => item.id == id) == null){
        return [...currItems, { id, quantity: 1 }];
      }else{
        return currItems.map( item => {
          if(item.id == id){
            return {id, quantity: item.quantity + 1}
          }else{
            return item;
          }
        })
      }
    })
  }

  function decreaseItemQuantity(id: number){
    setCartItems( currItems => {
      if(currItems.find( item => item.id == id)?.quantity == 1){
        return currItems.filter( item => item.id != id);
      }else{
        return currItems.map( item => {
          if(item.id == id){
            return { id, quantity: item.quantity - 1}
          }else{
            return item;
          }
        })
      }
    })
  }
  
  function getPaymentSummary(){
    let price = 0;
    let taxes = 1;
    let discount = 1;
    let total = 0;

    if(cartItems.length < 1) return null;

    cartItems.forEach( item => {
      const product: any = {
        price: 123,
      }
      price += (product.price * item.quantity);
    });

    total += (price +  taxes - discount);
    const result = {
      cartItems,
      paymentSummary: {
        price,
        taxes,
        total,
      }
    }

    return result;
  }

  return (
    <>
      <CartContext.Provider value={{ getPaymentSummary, cartItems, getItemQuantity, increaseItemQuantity, decreaseItemQuantity }} >
        {children}
      </CartContext.Provider>
    </>
  )
}

export default CartProvider;

export const useCart = () => {
  const result = useContext(CartContext);
  return result;
}
