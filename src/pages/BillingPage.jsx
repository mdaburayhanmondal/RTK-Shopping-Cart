import React from 'react';
import { useSelector } from 'react-redux';

const BillingPage = () => {
  const cart = useSelector((state) => state.cart);
  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subTotal > 0 ? 4.99 : 0;
  const total = subTotal + shipping;

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm h-fit sticky top-24">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>

      <div className="space-y-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-semibold text-gray-900">
            ${subTotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="font-semibold text-gray-900">
            ${shipping.toFixed(2)}
          </span>
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-between items-end">
          <div>
            <p className="text-sm text-gray-500">Total amount</p>
            <p className="text-2xl font-black text-gray-900">
              ${total.toFixed(2)}
            </p>
          </div>
          <p className="text-xs text-gray-400 font-medium mb-1">INC. VAT</p>
        </div>
      </div>

      <button className="w-full mt-8 bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-[0.98]">
        Checkout Now
      </button>
    </div>
  );
};

export default BillingPage;
