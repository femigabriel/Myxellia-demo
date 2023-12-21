import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="flex justify-center py-3">
      <div className="flex gap-1 ">
        <Image
          width={50}
          height={50}
          src="/assets/icons/fi-rr-lock.svg"
          className="w-[16px] h-[16px] mt-1"
          alt="Calendar"
          draggable="false"
        />
        <span className="text-[#919191] text-[16px] text-center">
          End-to-end encryption
        </span>
      </div>
    </div>
  );
};
