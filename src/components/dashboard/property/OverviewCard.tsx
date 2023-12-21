import React from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/button";
import { OverviewCardTypes } from "@/types/global";


export const OverviewCard = (props: OverviewCardTypes) => {
  return (
    <div className="overview-card py-7 px-5">
      <div className="">
        <div className="flex justify-between">
          <div className="flex gap-3">
            {props.icon}
            <h3 className="text-[14px] mt-1">{props.title}</h3>
          </div>

          <Button bg="fff">
            <span className="text-[#CBCBCB] text-[0.75em]] font-semibold">
              View all
            </span>
            <Image
              width={50}
              height={50}
              src="/assets/icons/rightIcon.svg"
              className="w-[18px] h-[18px]"
              alt="homeIcon"
              draggable="false"
            />
          </Button>
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};
