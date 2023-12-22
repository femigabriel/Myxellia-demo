import React from "react";
import Image from "next/image";
import { ListingOverviewCard } from "../listing/ListingOverviewCard";
import { BalanceCardTypes } from "@/types/global";

export const BalanceCard = (props: BalanceCardTypes) => {
  return (
    <div className={props.className}>
      <div className="flex justify-between">
        <span className="text-[#12D8A0] text-[16px] font-bold">
          {props.top}
        </span>
        {props.view}
      </div>
      <div className="flex flex-col">
        <h3 className="text-[28px] font-bold">
          ₦ 0.<span className="text-[#CBCBCB] text-[28px]">00</span>
        </h3>
        <p className="text-[#606060] text-[14px]">{props.title}</p>
        <div className="flex gap-5 mt-3">
          <ListingOverviewCard
            image={
              <Image
                width={50}
                height={50}
                src="/assets/icons/Image.svg"
                className="w-[100px] h-[100px]"
                alt="homeIcon"
                draggable="false"
              />
            }
            className=" bg-[#F5F5F5] rounded-[12px] px-3 py-2 cursor-pointer shadow-sm "
          />
          <div className="mt-3">
            <span className="text-[20px] font-bold">None</span>
            <div className="flex justity-center item-center mt-10 my-7">
              <div className="flex flex-col">
                <span className="">{props.amount}</span>
                <p>{props.content}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <span></span>
              <div className="flex">
                <p className="mt-1 mr-3">1/5</p>
                <div className="flex gap-2">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/icons/forward.svg"
                    className="w-[24px] h-[24px] "
                    alt="homeIcon"
                    draggable="false"
                  />
                  <Image
                    width={50}
                    height={50}
                    src="/assets/icons/forwardIcon.svg"
                    className="w-[24px] h-[24px] "
                    alt="homeIcon"
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
