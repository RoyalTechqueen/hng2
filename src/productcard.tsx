import React from 'react';
import {useStore} from './store';

interface Book {
  id: number;
  name: string;
  photos: { url: string }[];
  current_price: { NGN: number[] }[];
}

interface BookItemProps {
  book: Book;
  handleNavigate: (path: string) => void;
}

const ProductCard: React.FC<BookItemProps> = ({ book }) => {
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(book);
  };

  return (
    <div key={book.id} className="hidden md:flex flex-col items-center">
      <div className="border rounded p-4 flex flex-col items-center">
        <img
          src={`https://api.timbu.cloud/images/${book.photos[0]?.url}`}
          alt={book.name}
          className="w-32 h-48 object-cover mb-4"
        />
      </div>
      <div className="text-left mt-4">
        <h3 className="text-md font-bold">{book.name}</h3>
      </div>
      <div className="flex items-center mt-2">
        <p className="text-black text-sm">NGN{book.current_price[0].NGN[0]}</p>
        <button
          className="ml-3 px-1 py-1 bg-primary text-white rounded"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
