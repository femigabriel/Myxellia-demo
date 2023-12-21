import React from "react";
import { Divider } from "@chakra-ui/react";
import { ListingOverviewCard } from "./ListingOverviewCard";
import Image from "next/image";

export const ListingOverview = () => {
  return (
    <div className="list-overview-card px-5 py-7 w-full">
      <div className="">
        <h3 className="text text-lg">Listing Overview</h3>
      </div>
      <div className="flex flex-col w-full ">
        <div className="flex lg:gap-20 gap-5 mb-7">
          <ListingOverviewCard
            title={"Most Viewed"}
            image={
              <Image
                width={50}
                height={50}
                src="/assets/icons/Image.svg"
                className="mt-2"
                alt="homeIcon"
                draggable="false"
              />
            }
            divider={<Divider />}
            content="None"
            className="border-2 border-[#12D8A0] bg-[#F5F5F5] rounded-[12px] w-[67px] h-[68px] cursor-pointer "
          />
          <ListingOverviewCard
            image={
              <Image
                width={50}
                height={50}
                src="/assets/icons/Image.svg"
                className="mt-2"
                alt="homeIcon"
                draggable="false"
              />
            }
            title={"Most shared"}
            divider={<Divider />}
            content="None"
            className="border-2 border-[#12D8A0] bg-[#F5F5F5] rounded-[12px] w-[67px] h-[68px] cursor-pointer "
          />
        </div>
        <div className="flex lg:gap-20 gap-5">
          <ListingOverviewCard
            image={
              <Image
                width={50}
                height={50}
                src="/assets/icons/Image.svg"
                className="mt-2"
                alt="homeIcon"
                draggable="false"
              />
            }
            title={"Most watchlisted"}
            content="None"
            className="border-2 border-[#12D8A0] bg-[#F5F5F5] rounded-[12px] w-[67px] h-[68px] cursor-pointer "
          />
          <div className="border-2 border-[#E4E4E4] rounded-[12px] py-5 px-3">
            <div className="flex justify-between">
              <div className="mt-2">
                <h3 className="text-[1.5em] font-bold">0</h3>
                <span className="text-[10px] font-semibold">
                  Number of watchlists
                </span>
              </div>
              <div className="">
                <Image
                  width={50}
                  height={50}
                  src="/assets/icons/Bookmark.svg"
                  className="w-[32px] h-[32px] "
                  alt="homeIcon"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
