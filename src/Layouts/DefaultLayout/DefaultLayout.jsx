// import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";
const DefaultLayout = () => {
  const scrollContainerRef = useRef(null);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setIsHeaderActive(true) : setIsHeaderActive(false);
    };
    // Thêm sự kiện cuộn
    window.addEventListener("scroll", handleScroll);
    // Xóa sự kiện khi component bị hủy
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-tripSans">
      <div
        ref={scrollContainerRef}
        className="h-full w-full overflow-scroll scrollbar-hide relative"
      >
        <Header isHeaderActive={isHeaderActive} />
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
