import React from "react";
import Image from "next/image";
import { ListingCardTypes } from "@/types/global";

export const ListingOverviewCard = (props: ListingCardTypes) => {
  return (
    <div className="">
      <div className=" w-full">
        <div className="w-[]">
          <p className="mb-2">{props.title}</p>
          {props.divider}
        </div>
        <div className="flex gap=5 mt-5">
          <div className={props.className}>
            <div className="flex justify-center item-center">{props.image}</div>
          </div>
          <h3 className="text-[16px] font-bold  mt-4 ml-5">{props.content}</h3>
        </div>
      </div>
    </div>
  );
};
