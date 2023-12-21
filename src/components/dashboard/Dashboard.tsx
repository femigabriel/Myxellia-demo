import React from "react";
import { DashboardLayout } from "./layout/DashboardLayout";
import { SalesOverview } from "./sales/SalesOverview";
import { PropertyOverviewCard } from "./property/PropertyOverviewCard";
import { ListingOverview } from "./listing/ListingOverview";
import { BalanceCard } from "./balance/BalanceCard";
import { BalanceOverviewCard } from "./balance/BalanceOverviewCard";
import { VeergeAssistant } from "./VeergeAssistant";
import { Footer } from "./Footer";

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex gap-5 flex-col w-full">
        <div className="lg:flex w-full gap-4">
          <SalesOverview />
          <PropertyOverviewCard />
        </div>
        <div className="lg:flex gap-3">
          <ListingOverview />
          <BalanceOverviewCard />
        </div>
      </div>
      <div className="lg:flex justify-between">
        <span></span>
        <VeergeAssistant />
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </DashboardLayout>
  );
};
