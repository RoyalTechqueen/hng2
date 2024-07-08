import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

interface Book {
  id: number;
  title: string;
  genre: string;
  price: string;
  imageUrl: string;
}

interface BookCardProps {
  title: string;
  genre: string;
  price: string;
  imageUrl: string;
}

const BookCards: React.FC<BookCardProps> = ({ title, genre, price, imageUrl }) => {
  return (
    <div className='p-4'>
      <div className='hidden md:flex flex-col items-center'>
        <div className="border rounded p-4 flex flex-col items-center">
          <img src={imageUrl} alt={title} className="w-32 h-48 object-cover mb-4" />
        </div>
        <div className="text-left mt-4">
          <h3 className="text-md font-semi-bold">{title}</h3>
          <p className="text-gray-600">{genre}</p>
        </div>
        <div className='flex items-center mt-2'>
          <p className="text-gray-800 font-medium">{price}</p>
          <button className="ml-2 px-2 py-1 bg-primary text-white rounded">Add to Cart</button>
        </div>
      </div>
      <div className='md:hidden p-4 sm:flex flex-row items-center gap-4'>
        <div className="border rounded p-4 flex items-center">
          <img src={imageUrl} alt={title} className="w-36 h-48 object-cover mb-4" />
          <div className='flex flex-col text-left justify-center items-center'>
            <h3 className="text-md font-semi-bold">{title}</h3>
            <p className="text-gray-600">{genre}</p>
            <p className="text-gray-800 font-medium">{price}</p>
            <button className="ml-2 px-2 py-1 bg-primary text-white rounded">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductPage: React.FC = () => {
  const [books, ] = useState<Book[]>([
    { id: 1, title: 'Wilde in Love', genre: 'Romance', price: '₦15,000', imageUrl: '../public/img 3.jpeg' },
    { id: 2, title: 'Solar Bones', genre: 'Horror', price: '₦15,000', imageUrl: '../public/img1.jpeg' },
    { id: 3, title: 'Jaws', genre: 'Thriller', price: '₦15,000', imageUrl: '../public/img 2.jpeg' },
    { id: 4, title: 'The Last Watch', genre: 'Adventure', price: '₦15,000', imageUrl: '../public/img4.jpeg' },
    { id: 5, title: 'Enchanting Dragon Lord', genre: 'Fantasy', price: '₦15,000', imageUrl: '../public/img 5.jpeg' },
    { id: 6, title: 'Spirit demon', genre: 'Fantasy', price: '₦15,000', imageUrl: '../public/hng image 1.jpg' },
    { id: 7, title: 'Memory', genre: 'Romance', price: '₦15,000', imageUrl: '../public/hng image2.jpg' },
    { id: 8, title: 'Harry potter', genre: 'Adventure', price: '₦15,000', imageUrl: '../public/hng image3.jpg' },
    { id: 9, title: 'Thread', genre: 'Horror', price: '₦15,000', imageUrl: '../public/hng image4.jpg' },
    { id: 10, title: 'Unseelie', genre: 'Thriller', price: '₦15,000', imageUrl: '../public/hng image 5.jpg' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  const filterBooks = () => {
    let filteredBooks = books;

    if (selectedGenre !== 'All') {
      filteredBooks = filteredBooks.filter(book => book.genre === selectedGenre);
    }

    if (searchQuery) {
      filteredBooks = filteredBooks.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredBooks;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-white shadow-md">
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
          <img src="../public/Books Logo.png" alt="Books Logo" />
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                  placeholder="Search title, authors..."
                  required
                />
              </div>
            </form>
            <button onClick={() => handleNavigate("/cart")}>
              <IoCartOutline className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4 text-center mt-4">Novels</h1>

      {/* Dropdown for selecting category */}
      <div className='mb-4 flex justify-between items-center text-center flex-wrap'>
        <div className='mx-auto border rounded px-2 py-1 bg-white flex items-center gap-4'>
          <select onChange={(e) => setSelectedGenre(e.target.value)} value={selectedGenre} className='px-2 py-1'>
            <option value="All">All</option>
            <option value="Romance">Romance</option>
            <option value="Adventure">Adventure</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Thriller">Thriller</option>
          </select>
          <p>|</p>
          <select className="px-2 py-1">
            <option>Latest Stock</option>
            <option>Oldest Stock</option>
          </select>
        </div>
      </div>

      {/* Render filtered list */}
      <div className="container mx-auto p-4">
       
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {filterBooks().map(book => (
            <BookCards
                key={book.id}
                title={book.title}
                genre={book.genre}
                price={book.price}
                imageUrl={book.imageUrl}
              />
            ))}
        </div>
      </div>

      {/* Pagination - placeholder */}
      <div className="mt-4 flex justify-center items-center">
        <button className="px-3 py-1 border rounded bg-secondary">1</button>
        {/* Add pagination logic */}
      </div>
    </div>
  );
};

export default ProductPage;
