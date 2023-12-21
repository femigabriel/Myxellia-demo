import React from "react";
import Image from "next/image";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { CalendarDrawer } from "../dashboard/CalendarDrawer";

export const Header = () => {
  return (
    <main className="bg-[#191919] w-full h-[82p] px-14 py-5">
      <div className="flex justify-between ">
        <Image
          width={50}
          height={50}
          src="/assets/images/logo.svg"
          className="w-[165px]"
          alt="logo"
          draggable="false"
        />
        <div className="flex gap-10">
          <div className="flex gap-5 lg:mt-3">
            <Image
              width={12}
              height={12}
              src="/assets/icons/Plus.svg"
              className="w-[32px] h-[32px] cursor-pointer"
              alt="Plus"
              draggable="false"
            />
            {/* <Image
              width={50}
              height={50}
              src="/assets/icons/Calendar.svg"
              className="w-[32px] h-[32px] cursor-pointer"
              alt="Calendar"
              draggable="false"
            /> */}
            <CalendarDrawer />
            <Image
              width={50}
              height={50}
              src="/assets/icons/Notification.svg"
              className="w-[32px] h-[32px] cursor-pointer"
              alt="Notification"
              draggable="false"
            />
          </div>
          <div>
            <Menu>
              <MenuButton>
                <div className="flex">
                  <div className="flex gap-5">
                    <div className="flex">
                      <Image
                        width={50}
                        height={50}
                        src="/assets/icons/avatar.svg"
                        className="w-[48px] h-[48px]"
                        alt="logo"
                      />
                      <span className="text-white flex justify-center items-center ml-3">
                        Ahmed Ali
                      </span>
                    </div>
                    <div className="text-white flex justify-center items-center ">
                      <Image
                        width={50}
                        height={50}
                        src="/assets/icons/downIcon.svg"
                        className="w-[32px] h-[32px] "
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="lex">
                  </div>
                </div>
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </main>
  );
};
