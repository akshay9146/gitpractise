import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cart = useSelector(state => state.cart.cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2>💳 Checkout</h2>
      <p>Total Items: {cart.reduce((a, c) => a + c.qty, 0)}</p>
      <p>Total Price: ${total.toFixed(2)}</p>
      <button disabled={cart.length === 0}>Proceed to Payment</button>
    </div>
  );
};

export default Checkout;
