// import React from 'react'
import React, { useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { BiLogOut, BiMenu } from "react-icons/bi";
import { MdAddBusiness, MdRestaurantMenu } from "react-icons/md";
import { FaArrowLeft, FaArrowRight, FaUsers } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { FaUserCog } from "react-icons/fa";
import { RiHomeLine } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";
import { IoMdLogOut } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoNotificationsCircle } from "react-icons/io5";
import NotificationBell from "./NotificationBell";
// import Swal from "sweetalert2";
// import API_URL from "../Config";

function Admin1() {
  let [showMe, setShowMe] = useState(false);
  let [isCollapsed, setIsCollapsed] = useState(false);
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const { id } = useParams();
  function HideModal() {
    setShowMe(!showMe);
  }

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div>
      <div className=" h-[100vh] relative flex bg-gray-100 lg:p-5 text-[14px] gap-[20px]">
        
        <div className="lg:inline-block">
          <nav
            className={`absolute z-50 md:relative mt-3 lg:mt-0 ${
              showMe ? "-right-full" : "right-2"
            } ${isCollapsed ? "w-[70px]" : "w-[220px]"} bg-black lg:h-full h-[500px] lg:left-0 top-0 bottom-0 overflow-y-hidden group transition-all duration-300 rounded-[15px] text-white flex flex-col gap-3 ${isCollapsed ? "p-[10px]" : "p-[20px]"} overflow-x-hidden`}
          >
          
            <div className="flex items-center justify-between">
              <Link to="/" className={isCollapsed ? "hidden" : "block"}>
                <h1 className="font-bold flex gap-2 pl-[10px]">
                  <span className="italic text-textc">CM</span>ADMIN Dashboard
                </h1>
              </Link>
              <button
                onClick={toggleSidebar}
                className="p-2 hover:bg-gray-700 rounded-md transition-colors duration-200 ml-auto"
              >
                {isCollapsed ? <FaArrowRight /> : <FaArrowLeft />}
              </button>
            </div>
            <hr className="h-[1px] bg-custom-gradient w-[100%] border-t-0 opacity-[.25]" />
            <ul className={isCollapsed ? "leading-[50px] space-y-2" : "leading-[47px]"}>
              <li
                className={
                  (pathname === "/accon/dashboard"
                    ? "bg-textc text-black font-semibold"
                    : "") + " rounded-[5px] " + (isCollapsed ? "flex justify-center py-2" : "pl-[25px]")
                }
              >
                <Link
                  to="/accon/dashboard"
                  className={`flex gap-[6px] items-center ${isCollapsed ? "justify-center text-lg" : ""}`}
                  title={isCollapsed ? "Dashboard" : ""}
                >
                  <FaUsers /> {!isCollapsed && "Dashboard"}
                </Link>
              </li>

              <li
                className={
                  (pathname === "/accon/addproduct"
                    ? "bg-textc text-black font-semibold"
                    : "") + " rounded-[5px] " + (isCollapsed ? "flex justify-center py-2" : "pl-[25px]")
                }
              >
                <Link
                  to="/accon/addproduct"
                  className={`flex gap-[6px] items-center ${isCollapsed ? "justify-center text-lg" : ""}`}
                  title={isCollapsed ? "Add Product" : ""}
                >
                  <BsCashCoin /> {!isCollapsed && "Add Product"}
                </Link>
              </li>

              <li
                className={
                  (pathname === "/accon/order"
                    ? "bg-textc text-black font-semibold"
                    : "") + " rounded-[5px] " + (isCollapsed ? "flex justify-center py-2" : "pl-[25px]")
                }
              >
                <Link
                  to="/accon/order"
                  className={`flex gap-[6px] items-center ${isCollapsed ? "justify-center text-lg" : ""}`}
                  title={isCollapsed ? "View All Order" : ""}
                >
                  <FaUserCog /> {!isCollapsed && "View All Order"}
                </Link>
              </li>

              <li
                className={
                  (pathname === "/accon/productlist"
                    ? "bg-textc text-black font-semibold"
                    : "") + " rounded-[5px] " + (isCollapsed ? "flex justify-center py-2" : "pl-[25px]")
                }
              >
                <Link
                  to="/accon/productlist"
                  className={`flex gap-[6px] items-center ${isCollapsed ? "justify-center text-lg" : ""}`}
                  title={isCollapsed ? "View All Product" : ""}
                >
                  <FaUserCog /> {!isCollapsed && "View All Product"}
                </Link>
              </li>

              <li
                className={
                  (pathname === "/accon/settings"
                    ? "bg-textc text-black font-semibold"
                    : "") + " rounded-[5px] " + (isCollapsed ? "flex justify-center py-2" : "pl-[25px]")
                }
              >
                <Link
                  to="/accon/settings"
                  className={`flex gap-[6px] items-center ${isCollapsed ? "justify-center text-lg" : ""}`}
                  title={isCollapsed ? "Settings" : ""}
                >
                  <FaUserCog /> {!isCollapsed && "Settings"}
                </Link>
              </li>
            </ul>

            <div>
              <button 
                className={`p-[10px] w-[100%] text-black rounded-[10px] bg-textc font-bold flex gap-2 justify-center items-center mt-[50px] ${isCollapsed ? "text-lg" : ""}`}
                title={isCollapsed ? "Logout" : ""}
              >
                <BiLogOut className="text-[20px]" /> {!isCollapsed && "Logout"}
              </button>
            </div>
          </nav>
        </div>
        <div className=" flex-1 relative rounded-2xl shadow-xl overflow-y-scroll scrollbar-thumb-custom-orange scrollbar-thin scrollbar-corner-black scrollbar-track-slate-200">
          <nav className=" flex justify-between lg:fixed absolute items-center lg:right-[20px] w-full lg:w-[79%] h-[30px] text-white ">
            <div className=" p-2 bg-black rounded-tl-[20px] lg:invisible visible flex justify-center mt-2">
              <button onClick={HideModal} className=" text-white text-2xl ml-2">
                <BiMenu />{" "}
              </button>
            </div>
            <div className=" flex items-center gap-5  bg-black p-2 text-white mt-3 rounded-bl-md lg:mr-4 rounded-tr-md right-0">
              <FaCircleUser className=" text-[1.1rem] cursor-pointer" />
              <NotificationBell />
            </div>
          </nav>
          
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admin1;
