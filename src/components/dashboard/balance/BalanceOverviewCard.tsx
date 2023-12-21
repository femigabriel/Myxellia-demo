import React from "react";
import { BalanceCard } from "./BalanceCard";
import { Button } from "@chakra-ui/button";
import Image from "next/image";

export const BalanceOverviewCard = () => {
  return (
    <div className="lg:flex gap-3">
      <BalanceCard
        className="card lg:w-[415px] w0-full px-5 py-7 w-fu"
        // amount={""}
        amount={
          <span className="text-[#FF6A6A] text-[14px] font-bold">₦ 0.00</span>
        }
        content={"Outstanding Balance"}
        view={
          <Button bg="fff">
            <span className="text-[#CBCBCB] text-[0.75em] font-semibold">
              View all
            </span>
            <Image
              width={50}
              height={50}
              src="/assets/icons/rightIcon.svg"
              className="w-[18px] h-[18px] "
              alt="homeIcon"
              draggable="false"
            />
          </Button>
        }
      />
      <BalanceCard
        className="card px-5 py-7 lg:w-[350px] w-full"
        amount={<span className="text-[#CBCBCB] text-[14px] font-bold">0</span>}
        content={"Whole units sold"}
        top="Top Selling"
      />
    </div>
  );
};
