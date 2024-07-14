import { create } from 'zustand';

interface Book {
  id: number;
  name: string;
  photos: { url: string }[]; // Assuming photos exist in Book interface
  current_price: { NGN: number[] }[];
}

interface StoreState {
  books: Book[];
  cart: CartItem[];
  addToCart: (book: Book) => void;
  removeFromCart: (bookId: number) => void;
  clearCart: () => void;
  increaseQuantity: (bookId: number) => void;
  decreaseQuantity: (bookId: number) => void;
}

interface CartItem extends Book {
  quantity: number;
}

const useStore = create<StoreState>((set) => ({
  books: [],
  cart: [],
  addToCart: (book: Book) =>
    set((state) => ({
      cart: [...state.cart, { ...book, quantity: 1 }],
    })),
  removeFromCart: (bookId: number) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== bookId),
    })),
  clearCart: () =>
    set(() => ({
      cart: [],
    })),
  increaseQuantity: (bookId: number) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQuantity: (bookId: number) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === bookId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
}));

export { useStore };
