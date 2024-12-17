import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="relative bottom-0 w-full bg-gradient-to-t to-gray-800 from-gray-600">
      <div className="flex flex-col items-center justify-center py-4 space-y-3 text-white">
        {/* icon section */}
        <div className="flex flex-row gap-3 ">
          <FaFacebookF className="text-gray-300 hover:text-white hover:scale-105" />
          <FaTwitter className="text-gray-300 hover:text-white hover:scale-105" />
          <FaInstagramSquare className="text-gray-300 hover:text-white hover:scale-105" />
        </div>
        {/* main section */}
        <div>
          <ul className="flex flex-row gap-3 text-sm">
            <li className="text-gray-300 hover:text-white hover:scale-105">
              Home
            </li>
            <li className="text-gray-300 hover:text-white hover:scale-105">
              About
            </li>
            <li className="text-gray-300 hover:text-white hover:scale-105">
              Contact
            </li>
          </ul>
        </div>
        {/* reserved section */}
        <div>
          <p className="flex items-center justify-center gap-1 text-sm text-gray-300">
            © 2024 Your Company.All rights reserved.{" "}
            <span>
              <FaArrowUp />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
