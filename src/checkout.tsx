import React, { useState } from 'react';
import useStore from './store';
import Payment from './payment';
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleLinkClick = () => {
    setShowMenu(false);
  };
 

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
        
      </div>
    </div>
  );
};

const Delivery = () => {
  return (
    <div className="bg-white p-6">
      <form className="max-w-lg mx-auto">
      <div className="mb-4">
          <label htmlFor="fName" className="block text-sm font-medium text-black">First Name</label>
          <input
            type="text"
            id="fName"
            name="fName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm"
            placeholder="Enter First Name:" required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lName" className="block text-sm font-medium text-black">Last Name</label>
          <input
            type="text"
            id="lName"
            name="lName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm"
            placeholder="Enter Last Name:" required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-black">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm"
            placeholder="eg.you@booksmail.com" required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-black">Telephone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm"
            placeholder="0800 000 0000" required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="delivery" className="block text-sm font-medium text-black">Delivery Address</label>
          <input
            type="text"
            id="delivery"
            name="delivery"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm" required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium text-black">State</label>
          <input
            type="text"
            id="state"
            name="state"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm" required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-black">Country</label>
          <select name="country" id="country" className="mt-1 block w-full px-3 py-2 border border-gray-300">
            <option value="Nigeria">Nigeria</option>
          </select>
        </div>
      </form>
    </div>
  );
};



const Checkout = () => {
  const cart = useStore((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.quantity * item.current_price[0].NGN[0], 0);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Checkout Order</h1>
      <div className='flex flex-row items-center gap-4'>
      <FaArrowLeft onClick={() => navigate('/cart')} />
        <p>Back</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-6 mt-4">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>{item.quantity} x NGN{item.current_price[0].NGN[0]}</span>
            </div>
          ))}
          <hr className="my-4" />
          <div className="flex justify-between font-bold">
            <span>Order Total</span>
            <span>NGN{total}</span>
          </div>
        </div>
        <div>
          <Delivery />
        </div>
        <div>
          <Payment />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Checkout;
