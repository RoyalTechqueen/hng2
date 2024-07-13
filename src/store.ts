import create from 'zustand';

const useStore = create((set) => ({
  cart: [],
  addToCart: (book) => set((state) => {
    const existingBook = state.cart.find((item) => item.id === book.id);
    if (existingBook) {
      return {
        cart: state.cart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    } else {
      return { cart: [...state.cart, { ...book, quantity: 1 }] };
    }
  }),
  removeFromCart: (bookId) => set((state) => ({
    cart: state.cart.filter((book) => book.id !== bookId),
  })),
  increaseQuantity: (bookId) => set((state) => ({
    cart: state.cart.map((item) =>
      item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item
    ),
  })),
  decreaseQuantity: (bookId) => set((state) => ({
    cart: state.cart.map((item) =>
      item.id === bookId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 } : item
    ),
  })),
  clearCart: () => set({ cart: [] }),
}));

export default useStore;

