import React from "react";
import { Button } from "@chakra-ui/button";
import Image from "next/image";
import { Input } from "@chakra-ui/react";
import { DashboardButton, DashboardHeaderAuth } from "@/types/global";

export const DashboardHeader = (props: DashboardHeaderAuth) => {
  return (
    <main className=" w-full">
     
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
          <h1 className="font-bold text-xl">{props.title}</h1>
        </div>
        <p className="text-[#3D3D3D]">{props.description}</p>
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
