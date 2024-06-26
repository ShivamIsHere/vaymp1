import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { IoLayers } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import { IoHeart } from 'react-icons/io5';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className="w-full h-80vh">
      <section id="bottom-navigation" className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-blue-100 shadow-top">
        <div id="tabs" className="flex justify-between">
          <Link to="/" className="w-full focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
            <BiHomeAlt size={25} className="inline-block mb-1" />
            <span className="tab tab-home block text-xs">Home</span>
          </Link>
          <Link to="/wishlist" className="w-full focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
            <IoHeart size={25} className="inline-block mb-1" />
            <span className="tab tab-whishlist block text-xs">Wishlist</span>
          </Link>
          
          <Link to="/categories" className="w-full focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
            <IoLayers size={25} className="inline-block mb-1" />
            <span className="tab tab-kategori block text-xs">Category</span>
          </Link>
          <Link to="/cart" className="w-full focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
            <FaShoppingCart size={25} className="inline-block mb-1" />
            <span className="tab tab-explore block text-xs">Cart</span>
          </Link>
          <Link to="/profile" className="w-full focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
            <BsPerson size={25} className="inline-block mb-1" />
            <span className="tab tab-account block text-xs">Account</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BottomNav;
