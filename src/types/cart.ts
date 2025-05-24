export type paymentSummary = {
  price: number,
  taxes: number,
  discount: number,
  total: number,
}

export type cartItemType = {
  id: number, 
  quantity: number
}

export type cartType = {
  getPaymentSummary: () => paymentSummary | null,
  cartItems: any[],
  getItemQuantity: (id: number) => number,
  increaseItemQuantity: (id: number) => void,
  decreaseItemQuantity: (id: number) => void,
}
