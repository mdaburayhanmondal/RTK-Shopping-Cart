import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const cartItemNo = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const getLinkStyle = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors duration-200 ${
      isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-x-12">
          <NavLink to={'/'}>
            <h1 className="text-2xl font-black tracking-tighter text-gray-900">
              MINIMAL<span className="text-blue-600">.</span>
            </h1>
          </NavLink>
          <div className="hidden md:flex gap-x-8">
            <NavLink className={getLinkStyle} to={'/'}>
              Home
            </NavLink>
          </div>
        </div>

        <NavLink className="relative group p-2" to={'/cart'}>
          <HiOutlineShoppingBag
            size={26}
            className="text-gray-700 group-hover:text-blue-600 transition-colors"
          />
          {cartItemNo > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full ring-2 ring-white">
              {cartItemNo}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
