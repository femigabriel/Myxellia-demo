import React from "react";
import { Button } from "@chakra-ui/button";
import { Divider } from "@chakra-ui/react";
import Image from "next/image";
import { SalesBalance } from "./SalesBalance";

export const SalesOverview = () => {
  return (
    <div className="sales_overvew-card py-7">
      <div className="flex justify-between px-3 ">
        <div>
          <h3 className="">Sales Overview</h3>
          <p className="">Showing overview Jan 2022 - Sep 2022</p>
        </div>
        <Button
          bg="#ffff"
          border="1px solid #CBCBCB"
          width="147px"
          height="46px"
          color="#CBCBCB"
          fontSize="0.85rem"
          fontWeight="600"
          borderRadius="12px"
        >
          View Transactions
        </Button>
      </div>
      <div>
        <div className="flex justify-between mt-5 px-3 mb-3">
          <span></span>
          <div className="flex gap-3">
            <Button
              bg="#ffff"
              width="80px"
              height="33px"
              borderRadius="8px"
              color="#3D3D3D"
              fontSize={14}
              fontWeight={500}
            >
              1 Week
            </Button>
            <Button
              bg="#ffff"
              width="80px"
              height="33px"
              borderRadius="8px"
              color="#3D3D3D"
              fontSize={14}
              fontWeight={500}
            >
              1 Month
            </Button>
            <Button
              width="80px"
              height="33px"
              borderRadius="8px"
              color="#3D3D3D"
              fontSize={14}
              fontWeight={700}
            >
              1 Year
            </Button>
          </div>
        </div>
        <Divider />
      </div>

      <div className="lg:flex gap-10  w-full px-3">
        <SalesOverviewTable />
        <div className="flex flex-col mt-8">
          <div className="flex gap-3 mb-3">
            <SalesBalance
              title={"Balance"}
              amount={<span className="text-[#4545FE]">₦ 0.00</span>}
              content={
                <div className="flex">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/icons/percentage.svg"
                    className="w-[14px] h-[14px] "
                    alt="percentage"
                    draggable="false"
                  />
                  <span className="text-[#12D8A] text-[10px] ml-1"> 0%</span>
                </div>
              }
            />
            <SalesBalance
              title={"Deposit"}
              amount={
                <span>
                  ₦ 0.<span className="text-[#CBCBCB]">00</span>
                </span>
              }
              content={
                <div className="flex">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/icons/percentage.svg"
                    className="w-[14px] h-[14px] "
                    alt="percentage"
                    draggable="false"
                  />
                  <span className="text-[#12D8A] text-[10px] ml-1"> 0%</span>
                </div>
              }
            />
          </div>
          <div className="flex gap-3">
            <SalesBalance
              title={"Purchase"}
              amount={<span className="text-[#FF6A6A]">₦ 0.00</span>}
              content={
                <div className="flex">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/icons/percentage.svg"
                    className="w-[14px] h-[14px] "
                    alt="percentage"
                    draggable="false"
                  />
                  <span className="text-[#12D8A] text-[10px] ml-1"> 0%</span>
                </div>
              }
            />
            <SalesBalance
              title={"Withdrawal"}
              amount={<span className="text-[#4545FE]">₦ 0.00</span>}
              content={
                <div className="flex">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/icons/percentageRed.svg"
                    className="w-[14px] h-[14px] "
                    alt="percentage"
                    draggable="false"
                  />
                  <span className="text-[#12D8A] text-[10px] ml-1"> 0%</span>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SalesOverviewTable = () => {
  return (
    <div className="w-full">
      <div className="flex w-full">
        <div className="w-full">
          <div className="flex justify-between my-20">
            <Image
              width={50}
              height={50}
              src="/assets/icons/backIcon.svg"
              className="w-[32px] h-[32px] "
              alt="homeIcon"
              draggable="false"
            />
            <Image
              width={50}
              height={50}
              src="/assets/icons/forwardIcon.svg"
              className="w-[32px] h-[32px] "
              alt="homeIcon"
              draggable="false"
            />
          </div>

          <div className="flex justify-center lg:gap-7  gap-5 text-[10px] text-[#919191] font-semibold border-[#E4E4E] border-t-2">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span> May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
          </div>
        </div>
      </div>
    </div>
  );
};
