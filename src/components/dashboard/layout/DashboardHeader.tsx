import React from "react";
import { Button } from "@chakra-ui/button";
import Image from "next/image";
import { Input } from "@chakra-ui/react";
import { DashboardButton, DashboardHeaderAuth } from "@/types/global";

export const DashboardHeader = (props: DashboardHeaderAuth) => {
  return (
    <main className=" w-full">
      <div className="bg-[#fff] w-full lg:px-14 py-4 dashboard-header">
        <div className="lg:flex justify-between w-full">
          <div className="lg:flex lg:gap- w-full">
            <DashboardHeaderButtons
              bg="#F5F5F5"
              icon={
                <Image
                  width={50}
                  height={50}
                  src="/assets/icons/homeIcon.svg"
                  className="w-[32px] h-[32px] "
                  alt="homeIcon"
                  draggable="false"
                />
              }
              content={<span className=" font-bold">Dashboard</span>}
            />
            <DashboardHeaderButtons
              bg="#ffff"
              icon={
                <Image
                  width={50}
                  height={50}
                  src="/assets/icons/Location.svg"
                  className="w-[32px] h-[32px] "
                  alt="Location"
                  draggable="false"
                />
              }
              content="Listings"
            />
            <DashboardHeaderButtons
              bg="#fff"
              icon={
                <Image
                  width={50}
                  height={50}
                  src="/assets/icons/user.svg"
                  className="w-[32px] h-[32px] "
                  alt="user"
                  draggable="false"
                />
              }
              content="Users"
            />
            <DashboardHeaderButtons
              bg="#fff"
              icon={
                <Image
                  width={50}
                  height={50}
                  src="/assets/icons/Wallet.svg"
                  className="w-[32px] h-[32px] "
                  alt="logo"
                  draggable="false"
                />
              }
              content="Account"
            />
            <DashboardHeaderButtons
              bg="#fff"
              icon={
                <Image
                  width={50}
                  height={50}
                  src="/assets/icons/Calendar 1.svg"
                  className="w-[32px] h-[32px] "
                  alt="logo"
                  draggable="false"
                />
              }
              content="Request"
            />
            <DashboardHeaderButtons
              bg="#fff"
              icon={
                <Image
                  width={50}
                  height={50}
                  src="/assets/icons/Setting.svg"
                  className="w-[32px] h-[32px] "
                  alt="logo"
                />
              }
              content="Settings"
            />
          </div>
          <div>
            {/* <input placeholder="Search... properties, customers here" className="px-5" /> */}
            <Input
              placeholder="Search... properties, customers here"
              className="px-5"
            />
          </div>
        </div>
      </div>
      <div className="py-5 px-14">
        <div className="flex">
          <Image
            width={50}
            height={50}
            src="/assets/icons/handIcon.svg"
            className="w-[42px] h-[42px] "
            alt="handIcon"
            draggable="false"
          />
          <h1 className="font-bold text-xl mt-4">{props.title}</h1>
        </div>
        <p className="text-[#3D3D3D] pl-3 mt-1">{props.description}</p>
      </div>
    </main>
  );
};

export const DashboardHeaderButtons = (props: DashboardButton) => {
  return (
    <Button bg={props.bg}>
      {props.icon}
      <span className="text-[#191919] text-sm ml-2">{props.content}</span>
    </Button>
  );
};
{
  /* <div className="py-5 px-14">
<div className="flex">
  <Image
    width={50}
    height={50}
    src="/assets/icons/handIcon.svg"
    className="w-[42px] h-[42px] "
    alt="handIcon"
    draggable="false"
  />
  <h1 className="font-bold text-xl mt-4">{props.title}</h1>
</div>
<p className="text-[#3D3D3D] pl-3 mt-1">{props.description}</p>
</div> */
}
