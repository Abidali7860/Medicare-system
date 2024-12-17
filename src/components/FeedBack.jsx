import React, { useState } from "react";
import { MdDone } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa";
import { motion } from "framer-motion";
const FeedBack = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? (
        <div className="relative top-0 container pt-[90px] w-full ">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold underline">Feedback</h1>

            <p className="text-sm font-semibold text-gray-400">
              Submit the form below with the suggestions and to get in touch
              with us
            </p>
          </div>
          <div className="flex items-center justify-center my-9">
            <div className=" w-[600px] container gap-6 flex flex-col ">
              <input
                className="w-500px border-[3px] p-3 rounded-xl "
                type="text"
                placeholder="Enter your name"
              />
              <input
                className="w-500px border-[3px] p-3 rounded-xl "
                type="text"
                placeholder="Enter your email"
              />
              <textarea
                className="w-500px h-[300px] border-[3px] p-3 rounded-xl "
                type="text"
                placeholder="Enter your email"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setShow(!show)}
              className="px-5 py-3 mb-5 font-semibold rounded-md bg-gradient-to-l to-cyan-500 from-blue-500"
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="relative py-[80px] flex flex-col items-center justify-center w-[100%] h-[100%]   gap-6 bg-white">
          <motion.div
            initial={{ width: ["0px"], opacity: 0 }}
            animate={{
              width: ["16px", "32px", "48px", "64px"],
              height: ["16px", "32px", "48px", "64px"],
              opacity: 1,
            }}
            transition={{ delay: 0.2, duration: 1.2 }}
            className="flex justify-center items-center rounded-full border-[4px] border-green-500 w-16 h-16"
          >
            <MdDone size={50} className="font-bold text-green-500" />
          </motion.div>
          <h1 className="text-3xl font-semibold md:text-7xl">Thank You!</h1>
          <p className="text-sm font-semibold md:text-lg">
            The form was submitted successfully
          </p>
          <button
            onClick={() => setShow(!show)}
            className="flex items-center justify-center text-blue-500"
          >
            {" "}
            <span>
              <FaAngleLeft />
            </span>{" "}
            Back to Previous Page{" "}
          </button>
        </div>
      )}

      {/* successfully message */}
    </>
  );
};

export default FeedBack;
