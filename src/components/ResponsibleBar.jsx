import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const ResponsibleBar = ({ setMenuBar, menuBar }) => {
  return (
    <AnimatePresence mode="wait">
      {menuBar && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed z-20 flex items-center justify-center min-w-full md:hidden"
        >
          <div className="container absolute left-0 z-40 top-20 ">
            <div className="p-6 rounded-md bg-gradient-to-l to-gray-600 from-gray-400">
              <ul className="space-y-3">
                <li
                  onClick={() => setMenuBar(false)}
                  className="font-semibold text-md hover:text-blue-400 "
                >
                  {" "}
                  <Link to="/">Home</Link>{" "}
                </li>
                <li
                  onClick={() => setMenuBar(false)}
                  className="font-semibold text-md hover:text-blue-400 "
                >
                  {" "}
                  <Link to="/MedicineReminder">Medicine Reminder</Link>{" "}
                </li>
                <li
                  onClick={() => setMenuBar(false)}
                  className="font-semibold text-md hover:text-blue-400 "
                >
                  {" "}
                  <Link to="/YogaAsan">Yoga Place</Link>{" "}
                </li>
                <li
                  onClick={() => setMenuBar(false)}
                  className="font-semibold text-md hover:text-blue-400 "
                >
                  {" "}
                  <Link to="/myProfile">My Profile</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsibleBar;
