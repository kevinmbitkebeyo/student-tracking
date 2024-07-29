"use client"

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { GraduationCap, Hand, LayoutIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const SideNav = () => {
    const {user} = useKindeBrowserClient()
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutIcon,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Students",
      icon: GraduationCap,
      path: "/dashboard/students",
    },
    {
      id: 3,
      name: "Attendance",
      icon: Hand,
      path: "/dashboard/attendance",
    },
    {
      id: 4,
      name: "Settings",
      icon: Hand,
      path: "/dashboard/settings",
    },
  ];
  return (
    <div className="border-r shadow-md h-screen">
      <Image src="/logo.svg" alt="logo" width={80} height={50} />
      <hr className="my-5"></hr>
      {menuList.map((menu, index) => (
          <h2 className="flex items-center gap-3 p-4 text-slate-500 hover:bg-primary hover:text-white cursor-pointer rounded-lg my-2">
            <menu.icon/>
           {menu.name}
          </h2>
      ))}
      <div className="flex items-center bottom-5 fixed p-2"> 
        <Image src={user?.picture} alt="logo" width={35} height={35} className="rounded-full"/>
        <div>
            <h2 className="text-sm font-bold">{user?.given_name}</h2>
            <h2 className="text-xs text-slate-400">{user?.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
