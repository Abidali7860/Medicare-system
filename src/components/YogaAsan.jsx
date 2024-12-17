import React from "react";
import { yogaAsanas } from "./YogaData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const YogaAsan = () => {
  return (
    <>
      <div className="pt-[90px] container">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="text-2xl font-bold"
        >
          Yoga Asanas
        </motion.h1>
      </div>

      <div className="container grid grid-cols-1 gap-5 my-5 md:grid-cols-2 lg:grid-cols-3">
        {yogaAsanas.map(({ id, name, image,  benefits }) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link
                to={`/yoga/${name}`}
                key={id}
                className="border-[2px] flex flex-col space-y-2 p-4"
              >
                <div>
                  <img className="w-full h-[200px]" src={image} alt="" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold">{name}</h1>
                  <ul className="pl-5 list-disc ">
                    <li>{benefits[0]}</li>
                    <li>{benefits[1]}</li>
                    <li>{benefits[2]}</li>
                  </ul>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default YogaAsan;
