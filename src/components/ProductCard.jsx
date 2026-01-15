import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cart/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, category, image, price } = product;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-xl bg-gray-50 mb-4">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-2 right-2 bg-white/80 backdrop-blur-md text-gray-800 text-xs font-bold px-2 py-1 rounded-lg">
          {category}
        </span>
      </div>
      <div className="space-y-2">
        <h3 className="text-gray-900 font-semibold truncate">{name}</h3>
        <p className="text-xl font-bold text-blue-600">${price}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="w-full bg-gray-900 text-white py-2.5 rounded-xl font-medium transition-colors hover:bg-blue-600 active:scale-95"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
