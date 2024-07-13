import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ProductCard from './productcard';
import Navbar from './navbar';
import { FaApple, FaGooglePlay, FaChevronLeft, FaChevronRight, FaPhoneAlt } from 'react-icons/fa';
import Hero from './hero';
import { fetchProducts } from './fetchbooks';

const itemsPerPage = 10;

const ProductPage = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts({
          page: currentPage,
          size: itemsPerPage,
        });
        console.log('Fetched Products:', fetchedProducts); // Debug: log fetched products
        setBooks(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, [currentPage]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const totalPages = Math.ceil(books.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedBooks = books.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <h1 className="text-center font-bold text-2xl mt-4">Novels</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
        {selectedBooks.map((book) => (
          <ProductCard key={book.id} book={book} handleNavigate={handleNavigate} />
        ))}
      </div>
      <div className="flex justify-center p-4">
        {currentPage > 1 && (
          <button onClick={handlePrevPage} className="mr-2">
            <FaChevronLeft />
          </button>
        )}
        <span>Page {currentPage} of {totalPages}</span>
        {currentPage < totalPages && (
          <button onClick={handleNextPage} className="ml-2">
            <FaChevronRight />
          </button>
        )}
      </div>
      <div className="bg-primary mx-auto flex flex-col items-center justify-center text-white">
        <h1 className="mt-4 font-medium">Subscribe to our FREE VIP Email alerts</h1>
        <p className="mt-4 text-center">Sign up today and never miss our new books and sales deals again</p>
        <div className="flex items-center justify-between gap-2 mt-4">
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm"
            placeholder="Enter your email"
          />
          <button className="block w-full bg-secondary px-3 py-1">Sign Up</button>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center mb-12 mt-4 justify-between">
          <p className="text-center whitespace-nowrap">Download Mobile App</p>
          <div className="flex items-center gap-2 py-3 bg-white text-black block w-full border border-gray-300">
            <FaApple className="w-8 h-8" />
            <div className="flex flex-col items-center">
              <p className="whitespace-nowrap">Download on the</p>
              <h4>App Store</h4>
            </div>
          </div>
          <div className="flex items-center gap-2 py-3 bg-white text-black block w-full border border-gray-300">
            <FaGooglePlay className="w-8 h-8" />
            <div className="flex flex-col items-center">
              <p className="whitespace-nowrap">Get it on</p>
              <h4>Google Play</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
        <div className="flex items-center justify-center">
          <img src="/Books Logo.png" alt="Books Logo" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaPhoneAlt />
          <p>Contact Us</p>
        </div>
        <div className="flex items-center justify-center">
          <p>wise'R'books. All rights reserved</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <ul className="flex gap-4">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
