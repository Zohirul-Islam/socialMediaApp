import React from "react";
import { assets, dummyUserData } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import { CirclePlus, LogOut } from "lucide-react";
import {UserButton,useClerk} from '@clerk/clerk-react'
const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const user = dummyUserData
  const {signOut} = useClerk()
  return (
    <div
      className={`w-64 xl:w-72 border-r border-gray-300 flex flex-col items-center justify-between max-sm:absolute top-0 bottom-0 z-20 ${
        isSidebarOpen ? "translate-x-0" : "max-sm:-translate-x-full"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="w-full">
        <img
          onClick={() => navigate("/")}
          className="w-26 ml-7 my-2 cursor-pointer"
          src={assets.logo}
          alt=""
        />
        <hr className="border-gray-300 mb-8" />
        <MenuItem setSidebarOpen={setSidebarOpen} />
        <Link
          className="flex items-center justify-center gap-2 py-2 mt-6 mx-6 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-800 active:scale-95 transition text-white cursor-pointer"
          to={"/create-post"}
        >
          <CirclePlus className="w-5 h-5" />
          Create post
        </Link>
      </div>
      <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <UserButton/>
          <div>
            <h1 className="text-sm font-medium">{user.full_name}</h1>
            <p className="text-xs text-gray-500">@{user.username}</p>
          </div>
        </div>
        <LogOut onClick={signOut} className="w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer"/>
      </div>
    </div>
  );
};

export default Sidebar;
