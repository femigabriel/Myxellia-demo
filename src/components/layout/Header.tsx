import React from "react";
import Image from "next/image";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon, ChatIcon } from "@chakra-ui/icons";
import {
  LoginOutlined,
  MessageOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";

import { CalendarDrawer } from "../dashboard/CalendarDrawer";
import Link from "next/link";

export const Header = () => {
  return (
    <main className="bg-[#191919] w-full h-[82p] lg:px-14 px-5 py-5">
      <div className="flex justify-between ">
        <Image
          width={50}
          height={50}
          src="/assets/images/logo.svg"
          className="w-[165px]"
          alt="logo"
          draggable="false"
        />
        <div className="flex lg:gap-10">
          <div className="flex gap-5 lg:mt-3">
            <Image
              width={12}
              height={12}
              src="/assets/icons/Plus.svg"
              className="w-[32px] h-[32px] cursor-pointer"
              alt="Plus"
              draggable="false"
            />
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
                  <div className="lex"></div>
                </div>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link
                    href="/"
                    className="flex justify-between w-full gap-5 text-base"
                  >
                    <div className="flex">
                      <MessageOutlined className="mt-1 mr-2" />
                      <span>Support Center</span>
                    </div>
                    <ChevronRightIcon color="#3D3D3D" className="mt-1" />
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/"
                    className="flex justify-between w-full gap-5 text-base"
                  >
                    <div className="flex">
                      <UserSwitchOutlined className="mt-1 mr-2" />
                      <span> Switch Account</span>
                    </div>
                    <ChevronRightIcon color="#3D3D3D" className="mt-1" />
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/"
                    className="flex justify-between w-full gap-5 text-base"
                  >
                    <div className="flex">
                      <LoginOutlined className="mt-1 mr-2" />
                      <span>Logout</span>
                    </div>
                    <ChevronRightIcon color="#3D3D3D" className="mt-1" />
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </main>
  );
};
