import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useData } from "./DataContext";

type temp = {
  getPaymentSummary: () => any,
  cartItems: any[],
  getItemQuantity: (id: number) => any
  increaseItemQuantity: (id: number) => any
  decreaseItemQuantity: (id: number) => any
}

const CartContext = createContext<temp | null>(null);

const CartProvider = ({ children }: PropsWithChildren ) => {

  const { data } = useData();
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
    let taxes = 0;
    let discount = 0;
    let total = 0;

    if(cartItems.length < 1) return null;

    cartItems.forEach( (item, i) => {
      price += (data[i].price * item.quantity);
    });

    total += (price +  taxes - discount);

    const result = {
      price,
      taxes,
      discount,
      total,
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

export const useCart = (): temp => {
  const result = useContext(CartContext);
  return result!;
}
