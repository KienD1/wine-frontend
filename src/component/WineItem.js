import React from 'react';

const WineItem = ({ wine }) => {
  return (
    <div className="m-4 p-4 flex-col justify-center text-center shadow-xl bg-slate-100 rounded-2xl">
      <img
        src={wine.image}
        alt={wine.name}
        className="w-full object-contain mb-4 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer rounded-2xl"
      /> 
      <div className="text-lg font-semibold mb-1">{wine.name}</div>
      <div className="text-sm text-gray-600 mb-1">Suất xứ: {wine.origin}</div>
      <div className="text-sm text-gray-600 mb-1">Nồng độ: {wine.alcoholContent}</div>
      <div className="text-sm font-semibold">Giá: {wine.price}</div>
      <button className="px-12 py-1 my-2 bg-orange-400 text-white rounded-2xl hover:transform 
      hover:scale-105 transition-transform duration-300 ease-in-out font-semibold shadow-md"> Liên hệ</button>
    </div>
  );
};

export default WineItem;
