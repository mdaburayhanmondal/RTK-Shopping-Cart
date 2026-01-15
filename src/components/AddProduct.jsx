import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/features/products/productsSlice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    dispatch(addProduct(data));
    reset();
  };

  const inputClasses =
    'w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all';

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="text-white/70 text-xs font-bold uppercase mb-1.5 block ml-1">
          Product Details
        </label>
        <input
          {...register('name', { required: true })}
          placeholder="Product Name"
          className={inputClasses}
        />
      </div>

      <select
        {...register('category', { required: true })}
        className={inputClasses}
      >
        <option value="" className="text-gray-900">
          Select Category
        </option>
        <option value="Fashion" className="text-gray-900">
          Fashion
        </option>
        <option value="Gadget" className="text-gray-900">
          Gadget
        </option>
        <option value="Home" className="text-gray-900">
          Home & Living
        </option>
      </select>

      <input
        {...register('image', { required: true })}
        placeholder="Image URL"
        className={inputClasses}
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          {...register('price', { required: true })}
          placeholder="Price"
          className={inputClasses}
        />
        <input
          type="date"
          {...register('date', { required: true })}
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] mt-4"
      >
        Save Product
      </button>
    </form>
  );
};

export default AddProduct;
