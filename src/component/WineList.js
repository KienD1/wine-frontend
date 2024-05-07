import React from "react";
import WineItem from "./WineItem";

const WineList = ({ wines }) => {
  return (
   <div>
      <div className="w-full flex justify-center items-center">
        <div className="font-bold text-3xl text-orange-500 my-6">Sản phầm bán chạy</div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {wines.map((wine) => (
          <WineItem key={wine.id} wine={wine} />
        ))}
      </div>
   </div>
  );
};

export default WineList;
