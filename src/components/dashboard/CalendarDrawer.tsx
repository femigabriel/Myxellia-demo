import React from "react";
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

export const CalendarDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
            {/* {/* <Input type="date" /> */}
            heyyyy
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
