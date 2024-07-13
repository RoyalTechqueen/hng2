import React from 'react';
import useStore from './store';
import { useNavigate } from 'react-router-dom';
import { IoMdTrash } from 'react-icons/io';
import Navbar from './navbar';
import { FaArrowLeft } from "react-icons/fa";

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const clearCart = useStore((state) => state.clearCart);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.quantity * item.current_price[0].NGN[0], 0);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-20 p-4">
        <h1 className="text-2xl font-bold mb-4 text-center"> My Cart</h1>
        <div className='flex flex-row items-center gap-4 mb-4'>
      <FaArrowLeft onClick={() => navigate('/')} />
        <p>Back</p>
      </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-center mb-4">
                  <img src={`https://api.timbu.cloud/images/${item.photos[0]?.url}`} alt={item.name} className="w-32 h-32 object-cover" />
                  <div className="ml-4 flex-grow">
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-gray-600">NGN{item.current_price[0].NGN[0]}</p>
                    <div className="flex items-center mt-2">
                      <button className="px-2 py-1 border" onClick={() => decreaseQuantity(item.id)}>
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button className="px-2 py-1 border" onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                  </div>
                  <button className="ml-4 text-red-500" onClick={() => removeFromCart(item.id)}>
                    <IoMdTrash className="w-6 h-6" />
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="border p-4 rounded">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.name}</span>
                <span>{item.quantity} x NGN{item.current_price[0].NGN[0]}</span>
              </div>
            ))}
            <hr className="my-4" />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>NGN{total}</span>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-primary text-white rounded" onClick={() => navigate('/checkout')}>
              Continue to Checkout
            </button>
            <button className="mt-2 w-full text-red-500" onClick={clearCart}>
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
