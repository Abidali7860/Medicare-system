import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import { motion } from "framer-motion";

const customersData = [
  {
    id: 1,
    name: "Dev mehra",
    firstLetter: "D",
    rating: "4.5/5",
    desc: "Fabulous experience and amazing hospitality. Thankyou",
  },
  {
    id: 2,
    name: "Vishal Chauhan",
    firstLetter: "V",
    rating: "4.0/5",
    desc: "Game-changer! Reliable and user-friendly. Must-have application!",
  },
  {
    id: 3,
    name: "John Doe",
    firstLetter: "J",
    rating: "4.5/5",
    desc: '"Life-saving app! Never forget your meds again. Highly recommended!"',
  },
];
const Services = () => {
  return (
    <>
      <Hero />
      <div className="container md:py-14">
        {/* services header  */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <h1 className="text-3xl font-bold"> OUR SERVICES</h1>
          <p className="text-md text-gray-500 font-[600]">
            {" "}
            A user-friendly system designed for senior citizen
          </p>
        </div>
        {/* Services section */}
        <div className="grid grid-cols-1 gap-5 p-4 overflow-hidden lg:grid-cols-3 md:grid-cols-2 md:p-14">
          <Link
            to="/MedicineReminder"
            className="flex flex-col p-8 space-y-2 rounded-md bg-blue-200/40"
          >
            <h1 className="text-2xl font-semibold">Manage Medicines</h1>
            <p className="text-sm text-gray-800">
              {" "}
              Easily keep track of you medicines with our medicines Reminder
              feature.
            </p>
          </Link>

          <Link
            to="/myProfile"
            className="flex flex-col p-8 space-y-2 rounded-md bg-blue-200/60"
          >
            <h1 className="text-2xl font-semibold">Profile</h1>
            <p className="text-sm text-gray-800">
              customize your profile system to suit your preference.Update
              personal and many more.
            </p>
          </Link>

          <Link
            to="YogaAsan"
            className="flex flex-col p-8 space-y-2 rounded-md bg-blue-200/60"
          >
            <h1 className="text-2xl font-semibold">Yoga Place</h1>
            <p className="text-sm text-gray-800">
              Get a free subscription of Yoga and Exercise for you and your
              family.
            </p>
          </Link>

          <Link
            to="/bmiCalculator"
            className="flex flex-col p-8 space-y-2 rounded-md bg-blue-200/60"
          >
            <h1 className="text-2xl font-semibold">BMi Calculator</h1>
            <p>Calculator your BMI for better understanding of your health.</p>
          </Link>

          <Link
            to="/feedback"
            className="flex flex-col p-8 space-y-2 rounded-md bg-blue-200/60"
          >
            <h1 className="text-2xl font-semibold">Give Feedback</h1>
            <p className="text-sm text-gray-800">
              if you have any kind of suggestions and feedback for us kindly
              click on this
            </p>
          </Link>

          <Link
            to="community"
            className="flex flex-col p-8 space-y-2 rounded-md bg-blue-200/60"
          >
            <h1 className="text-2xl font-semibold">Community</h1>
            <p className="text-sm text-gray-800">
              A place where you can connect with other members
            </p>
          </Link>
        </div>

        {/* Customer Review */}
        <div className="flex items-center justify-center p-2 md:p-2">
          <h1 className="text-2xl font-bold uppercase">
            Here's what a few of our customers have to say about us
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 my-4 lg:grid-cols-3 md:grid-cols-2">
          {customersData.map(({ id, firstLetter, name, desc, rating }) => {
            return (
              <div
                key={id}
                className="flex flex-col justify-start gap-3 p-4 rounded-md bg-gradient-to-l to-gray-100 from-gray-200 "
              >
                {/* Heading section */}
                <div className="flex flex-row">
                  <div className="h-[60px] w-[60px] mr-3 bg-[#fed7aa] rounded-full flex justify-center items-center">
                    <h1 className="text-3xl font-[600] ">{firstLetter}</h1>
                  </div>

                  <div>
                    <h1 className="text-xl font-semibold">{name}</h1>
                    <p>{rating}</p>
                  </div>
                </div>
                <div>
                  <p>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
