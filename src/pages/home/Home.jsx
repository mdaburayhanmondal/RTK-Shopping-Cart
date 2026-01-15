import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import AddProduct from '../../components/AddProduct';

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-blue-600 font-bold text-sm uppercase tracking-widest">
                Storefront
              </p>
              <h2 className="text-4xl font-black text-gray-900 mt-1">
                Our Collection
              </h2>
            </div>
            <p className="text-gray-500 font-medium">{products.length} Items</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.length ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-gray-400">
                No products found in the catalog.
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-gray-900 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-white text-2xl font-bold mb-6">
              Inventory Management
            </h3>
            <AddProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
