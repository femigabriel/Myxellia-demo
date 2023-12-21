import { SalesBalanceCardTypes } from "@/types/global";
import React from "react";
import Image from "next/image";

export const SalesBalance = (props: SalesBalanceCardTypes) => {
  return (
    <div>
      <div className="sales-deatails py-5 px-3">
        <h3 className="font-bold text-xl">{props.amount}</h3>
        <div className="flex gap-2">
          <span className="text-[#3D3D3D] text-[10px]">{props.title}</span>
          <div>{props.content}</div>
        </div>
      </div>
    </div>
  );
};
{/* <div className="flex">
<Image
  width={50}
  height={50}
  src="/assets/icons/percentage.svg"
  className="w-[14px] h-[14px] "
  alt="percentage"
  draggable="false"
/>
<span> 0%</span>
</div> */}