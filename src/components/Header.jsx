/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";
import { DialogTitle, DialogClose } from "@radix-ui/react-dialog";
import ArrowRight from "@/assets/icons/ArrowRight";
import CloseMenu from "@/assets/icons/CloseMenu";
import CardMenu from "./CardMenu";
import { useState } from "react";

const Header = ({ isHeaderActive }) => {
  const [active, setActive] = useState(false);
  return (
    <header
      className={`fixed z-50 flex items-center justify-between px-[5rem] py-[1.5rem] overflow-hidden left-0 right-0 top-0 ${
        isHeaderActive && "hidden"
      }`}
    >
      <Logo />
      <Sheet>
        <SheetTrigger>
          <div className="flex justify-end items-center gap-[0.3375rem] pl-3 pr-4 py-3 rounded-3xl bg-[#E64827] cursor-pointer">
            <FaBars className="text-[#ddd]" />
            <span className="text-white text-center text-lg not-italic font-extrabold leading-4">
              MENU
            </span>
          </div>
        </SheetTrigger>
        <SheetContent
          side={"top"}
          className="bg-transparent bgMenu w-full h-full lg:h-[75%] sm:h-full bg-[url('/images/bannerMenun.png')] bg-cover border-none p-0"
        >
          <DialogClose className="fixed z-50 right-3 top-3">
            <CloseMenu />
          </DialogClose>
          <DialogTitle className="absolute left-10 top-5">
            <Logo />
          </DialogTitle>
          <div className="menuBarbg w-full relative h-full top-0 flex ">
            <div className="w-full lg:w-1/3 mt-32 mx-10 h-[65%] overflow-hidden">
              <ul className="text-white flex flex-col gap-1 w-3/4 md:w-full">
                <li className="itemMenu">
                  <div className="flex items-center">
                    <ArrowRight />
                    <a href="#">Home</a>
                  </div>
                </li>
                <li className="itemMenu">
                  <div className="flex items-center">
                    <ArrowRight />
                    <a href="#">About Us</a>
                  </div>
                </li>
                <li
                  className={`itemMenu overflow-hidden h-10 flex-col justify-start !items-start  ${
                    active && "h-36"
                  }`}
                >
                  <div className="flex items-center flex-col" onClick={() => setActive(!active)}>
                    <ArrowRight
                      cl={"left-0 translate-y-[15px]"}
                      active={active}
                    />
                    <a
                      href="#"
                      className={`flex items-center justify-center gap-1 ${
                        active && "active"
                      }`}
                    >
                      Tours
                      {active ? (
                        <IoIosArrowUp
                          fontSize={12}
                          className={`translate-y-[3px]`}
                        />
                      ) : (
                        <IoIosArrowDown
                          fontSize={12}
                          className={`translate-y-[3px]`}
                        />
                      )}
                    </a>
                  </div>
                  <div>
                    <ul
                      className={`cursor-pointer ${
                        active ? "h-full" : "h-0"
                      } flex flex-col gap-2 ml-5`}
                    >
                      <li className="itemMenu w-full text-xl text-white not-italic font-medium leading-[120%]">
                        Best Budget
                      </li>
                      <li className="itemMenu w-full opacity-70 text-xl text-white not-italic font-medium leading-[120%]">
                        Standard
                      </li>
                      <li className="itemMenu w-full opacity-70 text-xl text-white not-italic font-medium leading-[120%]">
                        Premium
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="itemMenu">
                  <div className="flex items-center">
                    <ArrowRight />
                    <a href="#">Activity</a>
                  </div>
                </li>
                <li className="itemMenu">
                  <div className="flex items-center">
                    <ArrowRight />
                    <a href="#">Destination</a>
                  </div>
                </li>
                <li className="itemMenu">
                  <div className="flex items-center">
                    <ArrowRight />
                    <a href="#">Blog</a>
                  </div>
                </li>
                <li className="itemMenu">
                  <div className="flex items-center">
                    <ArrowRight />
                    <a href="#">FAQ</a>
                  </div>
                </li>
                <li className="itemMenu">
                  <div className="flex items-center">
                    <ArrowRight />
                    <a href="#">Contact</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-28 hidden xl:block ">
              <CardMenu active={active} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
