import React from 'react';
import { useDispatch } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../redux/features/cart/cartSlice';
import { HiOutlineTrash, HiMinus, HiPlus } from 'react-icons/hi';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, price, image, quantity } = item;

  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100">
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-50 border border-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain p-2"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between">
          <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
          <button
            onClick={() => dispatch(removeFromCart({ id }))}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <HiOutlineTrash size={20} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => dispatch(decreaseQuantity({ id }))}
              className="p-2 hover:bg-gray-50 text-gray-600"
            >
              <HiMinus size={14} />
            </button>
            <span className="px-4 font-medium text-sm w-10 text-center">
              {quantity}
            </span>
            <button
              onClick={() => dispatch(increaseQuantity({ id }))}
              className="p-2 hover:bg-gray-50 text-gray-600"
            >
              <HiPlus size={14} />
            </button>
          </div>
          <p className="font-bold text-gray-900">
            ${(price * quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
