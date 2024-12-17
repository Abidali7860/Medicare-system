import React from "react";
import { CommunityData } from "./CommunityData";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div className="pt-[80px]  container min-h-[100vh] min-w-full bg-gray-200">
      <div>
        <h1 className="text-xl font-bold">Community</h1>
      </div>
      {/* community section */}
      <div className="grid grid-cols-1 gap-5 pb-3 my-5 md:grid-cols-2 lg:grid-cols-3">
        {CommunityData.map(({ name, Email, Website, Address }) => {
          return (
            <div className="px-3 py-3 bg-white rounded-lg">
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">{name}</h1>
                <p className="text-sm text-gray-500">
                
                  <span className="mr-2 text-sm font-[700]  text-gray-800">
                    Email
                  </span>
                  {Email}
                </p>
                <p className="text-sm text-gray-500">
                  
                  <span className="mr-2 text-sm text-gray-800 font-[700]">
                    Website
                  </span>
                  {Website}
                </p>
                <p className="text-sm text-gray-500">
                
                  <span className="mr-2 text-sm font-[700]  text-gray-800">
                    Email
                  </span>
                  {Address}
                </p>
              </div>
              <div className="flex justify-end my-2">
                <button className="bg-[#68c868] py-2 px-3 rounded-lg">
                  Connect
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Community;
