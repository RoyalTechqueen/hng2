import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx"
import { useNavigate } from "react-router-dom";

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
            className="hover:text-gray-600 text-xl"
            onClick={handleLinkClick}
          >
            StoryBooks
          </a>
          <a
            href="#"
            className="hover:text-gray-600 text-xl"
            onClick={handleLinkClick}
          >
            Novels
          </a>
          <a
            href="#"
            className="hover:text-gray-600 text-xl"
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
        <div className="text-xl font-bold">WiseReads</div>
        <div className="flex items-center gap-4">
          <form className="max-w-md mx-auto">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <FaSearch />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
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

interface BookDetailsProps {
  title: string;
  author: string;
  cover: string;
  price: number;
  genre: string;
  bestSellerRank: number;
}

const BookDetails: React.FC<BookDetailsProps> = ({ title, author, cover,  genre }) => {
  return (
    <div className="flex items-center ">
      <img src={cover} alt={`${title} cover`} className="w-20 h-32"/>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>by {author}</p>
        <p className="text-sm text-gray-600">Genre:{genre}</p>
      </div>
    </div>
  );
};

const QuantityComponent: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className=" flex items-center  border">
      <button 
        className="px-2 py-1 border bg-secondary" 
        onClick={() => setQuantity(quantity + 1)}
      >+</button>
      <span className="px-3">{quantity}</span>
      <button 
        className="px-2 py-1 border bg-secondary" 
        onClick={() => setQuantity(quantity - 1)}
      >-</button>
    </div>
  );
};


const CartSummary: React.FC = () => {
  const subtotal = 15000;
  const total = subtotal; // Add discounts and delivery to calculate total

  return (
    <div className="grid  md:grid-cols-4 grid-cols-2 items-center justify-between mb-4 ">
      <div className="flex justify-between gap-4 font-medium p-4 items-center border rounded">
        <span>Discount</span>
        <span>#0.00</span>
      </div>
      <div className="flex justify-between   gap-4 font-medium p-4 border rounded">
        <span>Delivery</span>
        <span>#0.00</span>
      </div>
      <div className="flex justify-between   gap-4 font-medium p-4 border rounded">
        <span>Subtotal</span>
        <span>#{subtotal}</span>
      </div>
      <div className="flex justify-between   gap-4 font-medium p-4 border rounded">
        <span>Total</span>
        <span>#{total}</span>
      </div>
    </div>
  );
};

const Cart: React.FC = () => {
    const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
    return(
        <main className="min-h-screen bg-secondary">
        <Navbar />
        <hr className=" border-t-2 border-black" />
        <button className="text-black flex items-center gap-2" onClick={() => handleNavigate("/")}>
      <HiOutlineArrowSmallLeft />
        Back
        </button>
          <h1 className="text-2xl font-bold mb-4 text-center">My Shopping Cart</h1>  
        <div className="bg-white max-w-4xl   mx-auto p-4">
        <div>
      <div className=" hidden md:flex justify-between items-center border-b pb-4 mb-4">
        <h1 className="text-xl font-semibold">Book Details</h1>
        <h1 className="text-xl font-semibold">Quantity</h1>
        <h1 className="text-xl font-semibold">Remove</h1>
        <h1 className="text-xl font-semibold">Price</h1>
      </div>
      <div className="md:hidden flex flex-col">
      <h1 className="text-md font-medium">Book Details</h1>
      <hr className="border-1 border-black mb-4" />
      <BookDetails
          title="The Last Watch" 
          author="J. S. Dewes" 
          cover="../public/img 3.jpeg" 
          price={15000} 
          genre="Adventure" 
          bestSellerRank={1} 
        />
        <hr className="border-1 border-black mb-4 mt-4" />
      </div>
      <div className="md:hidden ">
        <div className="flex justify-between items-center  mb-4">
      <h1 className="text-xl font-semibold">Quantity</h1>
        <h1 className="text-xl font-semibold">Remove</h1>
        <h1 className="text-xl font-semibold">Price</h1>
        </div>
        <hr className="border-1 border-black mb-4" />
        <div className="flex items-center justify-between mb-4">
        <QuantityComponent />
        <hr  className="mb-4 border-t-4 border-black"/>
        <button className="px-3 py-1 border">X</button>
        <hr  className="mb-4 border-t-4 border-black"/>
        <span className="font-semibold">#15,000</span>
        </div>
      </div>
      <div className=" hidden md:flex items-center justify-between mb-4">
        <BookDetails 
          title="The Last Watch" 
          author="J. S. Dewes" 
          cover="../public/img 3.jpeg" 
          price={15000} 
          genre="Adventure" 
          bestSellerRank={1} 
        />
        <QuantityComponent />
        <hr  className="mb-4 border-t-4 border-black"/>
        <button className="px-3 py-1 border">X</button>
        <hr  className="mb-4 border-t-4 border-black"/>
        <span className="font-semibold">#15,000</span>
      </div>
      <CartSummary />
      <div className=" hidden md:flex items-center justify-between">
        <form className="max-w-md items-center">
          <label htmlFor="Coupon" className="mb-2 text-sm font-medium">If you have a promotion code, please enter it here</label>
          <div className="relative">
            <input type="coupon" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none" placeholder="please enter your coupon" />
            <button type="submit" className="text-black border-black border border-1 absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none  font-medium rounded text-sm px-4 py-2 ">Apply Coupon</button>
          </div>
        </form>
      <div>
      <button className="hidden md:flex w-full px-12 py-2  text-black border rounded mt-2">Items:1</button>
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <button className="p-2 text-black   bg-primary text-white rounded" onClick={() => handleNavigate("/checkout")}>
          Checkout 
        </button>
        <button className="p-2 text-black rounded bg-secondary text-white" onClick={() => handleNavigate("/")}>Continue Shopping</button>
      </div>
      </div>
      <div className="flex flex-col gap-4 md:hidden">
      <form className="max-w-md items-center">
          <label htmlFor="Coupon" className="mb-2 text-sm font-medium">If you have a promotion code, please enter it here</label>
          <div className="relative">
            <input type="coupon" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none" placeholder="please enter your coupon" />
            <button type="submit" className="text-black border-black border border-1 absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none  font-medium rounded text-sm px-4 py-2 ">Apply Coupon</button>
          </div>
        </form>
        <button className="p-2 text-black   bg-green-500 rounded" onClick={() => handleNavigate("/checkout")}>
          Checkout 
        </button>
        <button className="p-2 text-black rounded " onClick={() => handleNavigate("/")}>Continue Shopping</button>
      </div>
    </div>
        </div>
      </main>
    );
};

export default Cart;