import React from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/button";
import { OverviewCard } from "./OverviewCard";

export const PropertyOverviewCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <OverviewCard
        title="Property Overview"
        icon={
          <Image
            width={50}
            height={50}
            src="/assets/icons/homeBlue.svg"
            className="w-[24px] h-[24px] "
            alt="homeIcon"
            draggable="false"
          />
        }
      >
        <div className="grid grid-cols-3 gap-10 mt-3">
          <Button
            bg="fff"
            // width="117px"
            height="79px"
            borderRadius={12}
            border="1px solid #F5F5F5"
          >
            <div className="flex flex-col">
              <h3 className="text-2xl  font-bold">0</h3>
              <span className="text-[#606060] text-sm">Total</span>
            </div>
          </Button>
          <Button
            bg="fff"
            // width="117px"
            height="79px"
            borderRadius={12}
            border="1px solid #F5F5F5"
          >
            <div className="flex flex-col">
              <h3 className="text-2xl  font-bold">0</h3>
              <span className="text-[#606060] text-sm">Available</span>
            </div>
          </Button>
          <Button
            bg="fff"
            // width="117px"
            height="79px"
            borderRadius={12}
            border="1px solid #F5F5F5"
          >
            <div className="flex flex-col">
              <h3 className="text-2xl  font-bold">0</h3>
              <span className="text-[#606060] text-sm">Sold Out</span>
            </div>
          </Button>
        </div>
      </OverviewCard>
      <OverviewCard
        title="Customers Overview"
        icon={
          <Image
            width={50}
            height={50}
            src="/assets/icons/blueAvatar.svg"
            className="w-[24px] h-[24px] "
            alt="homeIcon"
            draggable="false"
          />
        }
      >
        <div className="grid grid-cols-4 gap-10 mt-3">
          <Button
            bg="fff"
            height="79px"
            borderRadius={12}
            border="1px solid #F5F5F5"
          >
            <div className="flex flex-col">
              <h3 className="text-2xl  font-bold">0</h3>
              <span className="text-[#606060] text-sm">Total</span>
            </div>
          </Button>
          <Button
            bg="fff"
            height="79px"
            borderRadius={12}
            border="1px solid #F5F5F5"
          >
            <div className="flex flex-col">
              <h3 className="text-2xl  font-bold">0</h3>
              <span className="text-[#606060] text-sm">New</span>
            </div>
          </Button>
          <Button
            bg="fff"
            height="79px"
            borderRadius={12}
            border="1px solid #F5F5F5"
          >
            <div className="flex flex-col">
              <h3 className="text-2xl  font-bold">0</h3>
              <span className="text-[#606060] text-sm">Active</span>
            </div>
          </Button>
          <Button
            bg="fff"
            height="79px"
            borderRadius={12}
            border="1px solid #F5F5F5"
          >
            <div className="flex flex-col">
              <h3 className="text-2xl  font-bold">0</h3>
              <span className="text-[#606060] text-sm">Inactive</span>
            </div>
          </Button>
        </div>
      </OverviewCard>
    </div>
  );
};
