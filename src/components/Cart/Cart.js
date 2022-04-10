import React from "react";
import "./Cart.css";
const Cart = ({ cart, children }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    total += product.price * product.quantity;
    shipping += product.shipping;
    quantity += product.quantity;
  }
  const tax = +(total * 0.1).toFixed(2);
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Total Tax: ${tax}</p>
      <h4>Grand Total: ${grandTotal}</h4>
      {children}
    </div>
  );
};

export default Cart;