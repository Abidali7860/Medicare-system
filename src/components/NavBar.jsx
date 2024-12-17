import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import ResponsibleBar from "./ResponsibleBar";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [menuBar, setMenuBar] = useState(false);
  return (
    <>
      <div className="z-50 border-b-[1px] shadow-md fixed top-0 left-0 min-w-[100%] bg-gradient-to-l to-gray-300 from-gray-400">
        <div className="container flex items-center justify-between py-4 ">
          <div>
            <a className="font-semibold md:text-2xl" href="">
              Medicare System
            </a>
          </div>
          {/* nav item start */}
          <div className="flex-col items-center justify-center hidden md:flex">
            <ul className="flex items-center justify-center gap-6">
              <li className="font-semibold text-gray-500 text-md hover:text-black">
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li className="font-semibold text-gray-500 text-md hover:text-black">
                {" "}
                <Link to="/MedicineReminder">Medicine Reminder</Link>{" "}
              </li>
              <li className="font-semibold text-gray-500 text-md hover:text-black">
                {" "}
                <Link to="/YogaAsan">Yoga Place</Link>
              </li>
              <li className="font-semibold text-gray-500 text-md hover:text-black">
                {" "}
                <Link to="/myProfile">My Profile</Link>
              </li>
            </ul>
          </div>
          {/* nav item start */}
          <div
            onClick={() => setMenuBar(!menuBar)}
            className="flex items-center justify-center p-1 rounded-md md:hidden bg-gradient-to-b to-blue-600 from-cyan-500"
          >
            <FiMenu size={25} className="" />
          </div>
        </div>
      </div>
      <ResponsibleBar setMenuBar={setMenuBar} menuBar={menuBar} />
    </>
  );
};

export default NavBar;
