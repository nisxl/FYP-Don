import React from "react";

function Recommended() {
  return (
    <div className="flex flex-col text-[#4A1D1F] mb-[47px] italic font-medium bg-[#FBEDCD]">
      <p className="text-[24px] self-center">Products Recommended for you</p>
      <div className="flex justify-around">
        <div>
          <img
            src="../../images/cupcakes.jpg"
            className="w-[164px] h-[204px] rounded-lg"
          />
          <p className="text-[16px]">Strawberry Cupcakes</p>
        </div>
        <div>
          <img
            src="../../images/cupcakes.jpg"
            className="w-[164px] h-[204px] rounded-lg"
          />
          <p className="text-[16px]">Strawberry Cupcakes</p>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
