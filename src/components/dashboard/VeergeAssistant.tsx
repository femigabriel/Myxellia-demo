import React from "react";
import Image from "next/image";

export const VeergeAssistant = () => {
  return (
    <div>
      <div className="veerge flex">
        <Image
          width={50}
          height={50}
          src="/assets/icons/fi-rr-bulb.svg"
          className="w-[18px] h-[18px]"
          alt="homeIcon"
          draggable="false"
        />
        <span className="text-white text-md mx-2">Veerge Assistant</span>
        <Image
          width={50}
          height={50}
          src="/assets/icons/fi-rr-cross-circle.svg"
          className="w-[18px] h-[18px]"
          alt="homeIcon"
          draggable="false"
        />
      </div>
    </div>
  );
};
