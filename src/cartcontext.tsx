import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Book {
  id: string;
  name: string;
  photos: { url: string }[];
  current_price: { NGN: number };
}

interface CartItem {
  book: Book;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (book: Book, quantity: number) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  removeFromCart: (bookId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (book: Book, quantity: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.book.id === book.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.book.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { book, quantity }];
      }
    });
  };

  const updateQuantity = (bookId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.book.id === bookId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (bookId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.book.id !== bookId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
