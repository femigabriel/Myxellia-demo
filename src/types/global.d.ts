export type AuthList = {
    title: string;
    description: string;
  };

  interface DashboardHeaderAuth  {
    title: string;
    description: string;
  }

  interface DashboardButton  {
    content?: any;
    icon?: any;
    bg?: any;
  }
  interface OverviewCardTypes  {
    title: string;
    icon: any;
  children: any
  }
  interface ListingCardTypes  {
    title?: string;
    content?: string
    divider?: any;
    className: any
    image: React.ReactElement;
  }
  interface BalanceCardTypes  {
    top?: string;
    view?: React.ReactElement;
    title?: string;
    amount: React.ReactElement
    content: string
    className: any
  }

  interface SalesBalanceCardTypes  {
    title: string;
    amount?: React.ReactElement
    content?: React.ReactElement

  }