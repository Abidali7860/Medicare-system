import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-l to-blue-300/60 from-blue-100 pt-[80px]">
      <div className="container p-4 md:p-14 ">
        <div className="grid grid-cols-1 space-y-4 md:grid-cols-2 md:space-x-1">
          {/* hero text section */}

          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-3xl font-bold md:text-5xl">
              Welcome to the Medicare System
            </h1>
            <p className="text-sm font-semibold text-gray-600">
              A user-friendly Web App for all senior citizens to manage their
              medicines, maintain a healthy lifestyle with free yoga, and
              connect with a community to connect with others.
            </p>
          </div>
          {/* hero image section */}
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-[400px] rounded-lg"
              src="https://img.freepik.com/free-photo/medium-shot-smiley-senior-couple-sitting_23-2148984223.jpg?w=740&amp;t=st=1688816213~exp=1688816813~hmac=4b396e59198fcd440360569b529c96c2666d186291a34ad85c1673f09c05fde7"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
