import React from "react";
import { DashboardHeader } from "./DashboardHeader";
import { Layout } from "@/components/layout/Layout";

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const DashboardLayout = ({ children, title, description }: Props) => {
  return (
    <div className="w-full ">
      <Layout>
        <div className="min-w-[80vh] w-full ">
          <div className=" h-full w-full ">
            <DashboardHeader
              title={title || "Hi Ahmed"}
              description={description || "Welcome to your Dashboard"}
            />
          </div>
        </div>
      </Layout>

      <div className="lg:px-16 px-5 base_layout">{children}</div>
    </div>
  );
};
