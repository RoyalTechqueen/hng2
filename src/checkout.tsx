import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx"
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleLinkClick = () => {
      setShowMenu(false);
    };
  
    return (
      <div className="bg-secondary">
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
          <img src="/Books Logo.png" alt="Books Logo"  className='w-24 md:w-auto'/>
          <div className="flex items-center gap-4">
            <form className="max-w-md mx-auto">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-black sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <FaSearch />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                  placeholder="Search title, authors..."
                  required
                />
              </div>
            </form>
            <button >
              <IoCartOutline className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const OrderSummary: React.FC = () => {
    const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
    return (
        <div className="bg-secondary h-52 flex flex-col items-center justify-between p-4 inline-block">
        <div className="w-full text-md flex items-center justify-between">
            <h1>Order Summary</h1>
            <a href="#" className="text-sm text-blue-700 underline" onClick={() => handleNavigate("/cart")} >Edit cart</a>
        </div>
        <div className="w-full text-md flex items-center justify-between">
            <h1>The Last Watch Novel (1 copy) </h1>
            <p>#15000</p>
        </div>
        <div className="w-full text-sm flex items-center justify-between">
            <h1>Shipping and handling </h1>
            <p>#0.00</p>
        </div>
        <div className="w-full text-sm flex items-center justify-between">
            <h1>Tax</h1>
            <p>#0.00</p>
        </div>
        <hr className="border-1 border-black w-full" />
        <div className="w-full text-md flex items-center justify-between">
            <h1>Order Total</h1>
            <p>#15,000</p>
        </div>
    </div>
    
)
  }

  const Delivery: React.FC = () => {
    return (
        <div className="bg-green">
            <form className="max-w-lg mx-auto p-6 bg-white">
            <div className="mb-4">
        <label htmlFor="fName" className="block text-sm font-medium text-black">First Name</label>
        <input
          type="text"
          id="fName"
          name="fName"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none  sm:text-sm" placeholder="Enter First Name:"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="LName" className="block text-sm font-medium text-black">Last Name</label>
        <input
          type="text"
          id="lName"
          name="lName"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none  sm:text-sm" placeholder="Enter Last Name:"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-black">Email Address</label>
        <input
          type="email"
          id="fName"
          name="fName"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none  sm:text-sm" placeholder="eg.you@booksmail.com"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="tel" className="block text-sm font-medium text-black">Telephone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none  sm:text-sm" placeholder="0800 000 0000"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="delivery" className="block text-sm font-medium text-black">Delivery Address</label>
        <input
          type="text"
          id="delivery"
          name="delivery"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none  sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block text-sm font-medium text-black">State</label>
        <input
          type="text"
          id="state"
          name="state"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none  sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block text-sm font-medium text-black">Country</label>
        <select name="country" id="country" className="mt-1 block w-full  px-3 py-2 border border-gray-300">
            <option value="Nigeria">Nigeria</option>
        </select>
      </div>
            </form>
        </div>
    )
  }

  const Payment: React.FC = () => {
    return (
        <div>
            <h1 className="p-2 font-medium">Payment Details</h1>
            <div className="block w-full space-x-2 flex items-center bg-white justify-center  border border-gray-300">
              <FaApple />
                <p>Pay</p>
            </div>

            <div className=" mt-4 block  space-x-2 w-full flex items-center bg-white justify-center  border border-gray-300">
                <FaGoogle className="text-green-500" />
                <p>Pay</p>
            </div>
            <div className="flex items-center mt-2 w-full max-w-md mx-auto">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-sm text-black">Or pay with</span>
        <div className="flex-grow border-t border-gray-300"></div>
    </div>
            <form className="max-w-md items-center mt-4">
          <label htmlFor="Card" className="mb-2 text-sm">Card Information</label>
          <div className="relative">
            <input type="card" className="block w-full p-4 text-sm text-black border border-gray-300 rounded-md focus:outline-none" placeholder="1234 1234 1234" />
            <div  className="text-black flex space-x-1  absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none  font-medium rounded text-sm  py-2 "> 
                <FaCcVisa className="w-4 h-4 text-red" />
                <FaCcMastercard  className="w-4 h-4 text-red"/>
            </div>
          </div>
        </form>
        <div className="mt-2 flex ">
            <input type="card" className="block w-full p-4 text-sm text-black border border-gray-300  focus:outline-none" placeholder="MM/YY" />
            <input type="card" className="block w-full p-4 text-sm text-black border border-gray-300  focus:outline-none" placeholder="CVC" />
            </div>
            <button className="block w-full px-4 py-2 items-center bg-primary text-white mt-4">Pay #15,000</button>
        </div>
    )
  }

const Checkout: React.FC = () => {
    const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
    return(
       <div className="min-h-screen bg-secondary">
        <Navbar />
        <hr className="mb-4 border-t-2 border-black" />
        <button className="text-black flex items-center gap-2" onClick={() => handleNavigate("/cart")}>
      <HiOutlineArrowSmallLeft />
        Back
        </button>
          <h1 className="text-2xl font-bold mb-4 text-center">Checkout Order</h1> 
          <div className="flex items-center justify-center  bg-secondary">
          <div className="bg-white  mx-auto max-w-4xl mb-12 p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <OrderSummary  />
            <Delivery />
            <Payment />
            </div>
          </div>
          </div>
          <div className='bg-primary mx-auto flex flex-col  items-center justify-center text-white'>
    <h1 className='mt-4  font-medium'>Subscripe to our FREE VIP Email alerts</h1>
    <p className='mt-4 text-center'>Sign up today and never miss our new books and sales deals again</p>
    <div className='flex items-center justify-between gap-2 mt-4'>
    <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block px-3 py-2 border border-gray-300 focus:outline-none  sm:text-sm" 
          placeholder='Enter your email'
        />
        <button className=' block w-full bg-secondary px-3 py-1'>Sign Up</button>
    </div>
    <div className='flex flex-col md:flex-row gap-4 items-center mb-12  mt-4 justify-between'>
      <p className='text-center whitespace-nowrap'>Download Mobile App</p>
      <div className=' flex  items-center gap-2 py-3 bg-white text-black block w-full border border-gray-300'>
        <div className='flex items-center '>
          <FaApple className='w-12 h-12' />
        </div>
        <div className='flex flex-col items-center '>
          <p className='whitespace-nowrap'>Download on the</p>
          <h4>App Store</h4>
        </div>
      </div>
      <div className='flex  items-center gap-2 py-3 bg-white text-black block w-full border border-gray-300'>
        <div className='flex items-center'>
          <FaGooglePlay className='w-12 h-12' />
        </div>
        <div className='flex flex-col  items-center'>
          <p className='whitespace-nowrap'>Get it on</p>
          <h4>Google Play</h4>
        </div>
      </div>
    </div>
   
      </div>
      <div className='bg-white grid grid-cols-2 md:grid-cols-4 gap-4  p-2'>
  <div className='flex items-center justify-center'>
    <img src="/Books Logo.png" alt="Books Logo" />
  </div>
  <div className='flex items-center justify-center gap-2'>
    <FaPhoneAlt />
    <p>Contact Us</p>
  </div>
  <div className='flex items-center justify-center'>
    <p>wise'R'books. All rights reserved</p>
  </div>
  <div className='flex items-center justify-center gap-4'>
    <ul className='flex gap-4'>
      <li>Privacy</li>
      <li>Terms</li>
    </ul>
  </div>
  </div>
       </div>
    );
};

export default Checkout;