import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import BillingPage from './BillingPage';

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="py-12 max-w-7xl container mx-auto px-4">
      <div className="container mx-auto">
        <h2 className="mb-5 text-xl font-bold">Shopping Cart</h2>
        <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
          <div className="space-y-6 md:w-2/3">
            {cart.length ? (
              cart.map((p) => <CartItem item={p} key={p.id} />)
            ) : (
              <div>No Product In Your Cart!</div>
            )}
          </div>
          <BillingPage />
        </div>
      </div>
    </div>
  );
};

export default Cart;
