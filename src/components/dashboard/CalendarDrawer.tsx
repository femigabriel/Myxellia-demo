import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const CalendarDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [sDate, setsDate] = useState(new Date());

  const findMonthDays = (y: any, m: any) => {
    return new Date(y, m + 1, 0).getDate();
  };

  const findFirstDay = (y: any, m: any) => {
    return new Date(y, m, 1).getDay();
  };

  const changeToPrevMonth = () => {
    setsDate((pDate) => {
      const pMonth = pDate.getMonth() - 1;
      const pYear = pDate.getFullYear();
      return new Date(pYear, pMonth);
    });
  };

  const changeToNextMonth = () => {
    setsDate((pDate) => {
      const nMonth = pDate.getMonth() + 1;
      const nYear = pDate.getFullYear();
      return new Date(nYear, nMonth);
    });
  };

  const handleDateClick = (date: any) => {
    setsDate(date);
  };

  const showCalendar = () => {
    const currDate = new Date();
    const y = sDate.getFullYear();
    const m = sDate.getMonth();
    const mDays = findMonthDays(y, m);
    const fDay = findFirstDay(y, m);

    const allDays = [];

    // For empty cells
    for (let p = 0; p < fDay; p++) {
      allDays.push(<div key={`em-${p}`} className="box empty"></div>);
    }

    // Show actual days
    for (let d = 1; d <= mDays; d++) {
      const date = new Date(y, m, d);
      const isSelected = sDate && date.toDateString() === sDate.toDateString();

      allDays.push(
        <div
          key={`d-${d}`}
          className={`box ${isSelected ? "selected" : ""}`}
          onClick={() => handleDateClick(date)}
        >
          {d}
        </div>
      );
    }

    return allDays;
  };

  return (
    <div>
      <Image
        width={50}
        height={50}
        src="/assets/icons/Calendar.svg"
        className="w-[32px] h-[32px] cursor-pointer"
        alt="Calendar"
        draggable="false"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <div className="calender-header">
              <h3 className="text-[#fff] text-[16px] font-bold">Calendar</h3>
            </div>
          </DrawerHeader>

          <DrawerBody>
            <div className="main">
              <div className="header">
                <button onClick={changeToPrevMonth}>
                  <Image
                    width={50}
                    height={50}
                    src="/assets/icons/arrow-left.svg"
                    className="w-[24px] h-[24px] cursor-pointer"
                    alt="Calendar"
                    draggable="false"
                    onClick={onOpen}
                  />
                </button>
                <h2 className="text-white lg:mx-10 mx-3 text-base">
                  {sDate.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </h2>
                <button onClick={changeToNextMonth}>
                  <Image
                    width={50}
                    height={50}
                    src="/assets/icons/arrow-right.svg"
                    className="w-[24px] h-[24px] cursor-pointer"
                    alt="Calendar"
                    draggable="false"
                    onClick={onOpen}
                  />
                </button>
              </div>
              <div className="days">
                <span className="">Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span className="ml-1">Sat</span>
              </div>
              <div className="body">{showCalendar()} </div>
              {sDate && (
                <div className="selected-date">
                  Selected Date: {sDate.toLocaleDateString()}
                </div>
              )}
            </div>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </div>
  );
};
