import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './productcard';
import Navbar from './navbar';
import Hero from './hero';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const itemsPerPage = 10;

const ProductPage: React.FC = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();

    const fetchProducts = async (page, size) => {
        const response = await axios.get('https://timbu-get-all-products.reavdev.workers.dev/', {
            params: {
                organization_id: import.meta.env.VITE_ORGANIZATION_ID,
                reverse_sort: false,
                page: page,
                size: size,
                Appid: import.meta.env.VITE_APP_ID,
                Apikey: import.meta.env.VITE_API_KEY
            }
        });
        return response.data; // Adjust based on actual response structure
    };

    const fetchAllProducts = async () => {
        let allProducts = [];
        let currentPage = 1;
        let totalProducts = 0;

        const initialResponse = await fetchProducts(currentPage, itemsPerPage);
        allProducts = initialResponse.items;
        totalProducts = initialResponse.total; // Ensure the API provides this count

        setTotalPages(Math.ceil(totalProducts / itemsPerPage));

        return allProducts;
    };

    useEffect(() => {
        const getProducts = async () => {
            try {
                const products = await fetchAllProducts();
                setBooks(products);
            } catch (error) {
                console.error('Error fetching all products:', error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    if (loading) return <div>Loading...</div>; // Optional loading state

    return (
        <div>
            <Navbar />
            <Hero />
            <h1 className="text-center font-bold text-2xl mt-4">Novels</h1>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
                {books.map((book) => (
                    <ProductCard key={book.id} book={book} handleNavigate={navigate} />
                ))}
            </div>
            <div className="flex justify-center p-4">
                {currentPage > 1 && (
                    <button onClick={() => setCurrentPage(currentPage - 1)} className="mr-2">
                        <FaChevronLeft />
                    </button>
                )}
                <span>Page {currentPage} of {totalPages}</span>
                {currentPage < totalPages && (
                    <button onClick={() => setCurrentPage(currentPage + 1)} className="ml-2">
                        <FaChevronRight />
                    </button>
                )}
            </div>
            <div className="bg-primary mx-auto flex flex-col items-center text-white">
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
            </div>
        </div>
    );
};

export default ProductPage;
