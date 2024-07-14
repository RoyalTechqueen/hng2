import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import {useStore} from './store';

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const cart = useStore((state) => state.cart);

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-white fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto p-4 flex justify-between gap-4 items-center">
        <button
          className="block md:hidden ml-4"
          aria-label="Toggle Menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <RxHamburgerMenu className="text-2xl" />
          )}
        </button>
        <nav className={`fixed inset-0 bg-white z-10 transform ${showMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center space-y-6 p-6`}>
          <button
            className="self-end mr-4 mt-4"
            aria-label="Close Menu"
            onClick={() => setShowMenu(false)}
          >
            <IoMdClose className="text-2xl" />
          </button>
          <a
            href="#"
            className="hover:text-black text-xl"
            onClick={handleLinkClick}
          >
            StoryBooks
          </a>
          <a
            href="#"
            className="hover:text-black text-xl"
            onClick={handleLinkClick}
          >
            Novels
          </a>
          <a
            href="#"
            className="hover:text-black text-xl"
            onClick={handleLinkClick}
          >
            Educational books
          </a>
        </nav>
        <nav className="hidden md:flex gap-4 items-center">
          <h3>StoryBooks</h3>
          <h3 className="border rounded p-2">Novels</h3>
          <h3>Educational books</h3>
        </nav>
        <img src="/Books Logo.png" alt="Books Logo" className='w-auto md:mr-40 mr-24'/>
        <div className="flex items-center gap-4 relative">
          <button onClick={handleCartClick} className="relative">
            <IoCartOutline className="w-8 h-8" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

