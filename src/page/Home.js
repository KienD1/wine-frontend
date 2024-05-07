import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import BestSale from '../component/BestSale';
import WineList from '../component/WineList';
import wineData from '../component/WineData';

const Home = () => {
    const itemsPerPage = 9;
    const totalPages = Math.ceil(wineData.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(itemsPerPage);

    useEffect(() => {
        const newStartIndex = (currentPage - 1) * itemsPerPage;
        const newEndIndex = Math.min(newStartIndex + itemsPerPage, wineData.length);
        setStartIndex(newStartIndex);
        setEndIndex(newEndIndex);
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='p-0'>
                <BestSale />
            </div>
            <div>
                <div className="container mx-auto py-8">
                    <WineList wines={wineData.slice(startIndex, endIndex)} />
                   <div className='flex items-center justify-center'>
                        {currentPage > 1 && (
                            <div className="mt-4 flex justify-center mr-4">
                                <button
                                    onClick={handlePrevPage}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                                >
                                    Trang trước
                                </button>
                            </div>
                        )}
                        {currentPage < totalPages && (
                            <div className="mt-4 flex justify-center">
                                <button
                                    onClick={handleNextPage}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                                >
                                    Trang sau
                                </button>
                            </div>
                        )}
                   </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
