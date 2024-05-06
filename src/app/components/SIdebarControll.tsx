"use client";

import useSidebar from "@/lib/store";
import { useState } from "react";

const SidebarControll = () => {
  const { isOpen, toggle } = useSidebar();
  const icon = <i className="fa-solid fa-bars"></i>;
  const handleToggle = () => {
    toggle(!isOpen);
  };
  console.log(isOpen);

  return (
    <button type="button" className="mx-4" onClick={() => handleToggle()}>
      {icon}
    </button>
  );
};

export default SidebarControll;
