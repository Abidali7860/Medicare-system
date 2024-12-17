import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { yogaAsanas } from "./YogaData";

const YogaPlace = () => {
  const { name } = useParams();
  if (!name) {
    throw new Error("ID parameter is missing.");
  }

  const [Yoga, setYoga] = useState({});
  useEffect(() => {
    const filterData = yogaAsanas.filter((item) => item.name == name);
    console.log(filterData);
    setYoga(filterData[0]);
  }, [name]);
  return (
    <div className="container pt-[90px] flex justify-center items-center">
      <div>
        <div>
          <h1 className="text-2xl font-semibold text-blue-500 underline">
            {Yoga.name}
          </h1>
        </div>
        <div className="flex flex-col my-3 space-y-4 ">
          <div>
            <img src={Yoga.image} alt="" />
          </div>
          <div>
            <ul className="pl-3 list-disc">
              {Yoga && Yoga.benefits ? (
                <>
                  <li>{Yoga.benefits[0]}</li>
                  <li>{Yoga.benefits[1]}</li>
                  <li>{Yoga.benefits[2]}</li>
                </>
              ) : (
                <li>Loading benefits...</li>
              )}
            </ul>
          </div>
          <div className="p-3">
            <h1 className="text-2xl font-semibold">Details</h1>
            <p>{Yoga.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaPlace;
