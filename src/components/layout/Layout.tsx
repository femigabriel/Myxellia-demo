"use client";

import React from "react";
import { Header } from "./Header";

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="w-full ">
      <Header />
      <div className="min-w-[80vh] w-full base_layout">
        <div className=" h-full w-full">
          <div className="lg:px-">{children}</div>
        </div>
      </div>
    </div>
  );
};
