import React from 'react';
import g7 from '../assets/img/g7.png'

const BestSale = () => {
    return (
            <div className='h-screen w-screen  bg-gradient-to-l from-orange-200 to-orange-400'>
                <div className='grid md:grid-cols-2 h-full mt-16 lg:mt-0'>
                    <div className='lg:ml-80 flex justify-center flex-col lg:text-left font-semibold text-center'>
                        <div className='text-4xl text-cyan-600'>Rượu Vang G77 Valpolicella</div>
                        <div className='mt-6 text-xl font-semibold'>Loại: Rượu vang đỏ</div>
                        <div className='mt-6 text-xl font-semibold'>Nồng độ : 15%</div>
                        <div className='mt-6 text-xl font-semibold'>2.555.000 đ</div>
                        <div className='flex lg:justify-start mt-6 items-center justify-center'>
                            <button className='hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-center items-center rounded-3xl bg-orange-500 w-48 h-10 text-white text-xl font-semibold ' type="text">Liên hệ ngay</button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <img className='xl:w-2/4 xl:h-2/4' src={g7} alt=""></img>
                    </div>
                </div>
            </div>
    );
}

export default BestSale;
