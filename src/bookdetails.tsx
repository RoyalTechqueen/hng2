import React from 'react';

interface Book {
  id: string;
  name: string;
  photos: { url: string }[];
  current_price: { NGN: [number] };
}

interface BookDetailsProps {
  book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  return (
    <div className="flex items-center gap-4">
      <img src={book.photos[0].url} alt={book.name} className="w-16 h-16 object-cover" />
      <div>
        <h3 className="font-bold">{book.name}</h3>
        <p>#{book.current_price[0]}</p> {/* Displaying the price */}
      </div>
    </div>
  );
};

export default BookDetails;

