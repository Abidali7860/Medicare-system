import React, { useState, useEffect } from "react";

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");

  // Load BMI data from localStorage on initial render
  useEffect(() => {
    const savedBMI = localStorage.getItem("bmi");
    const savedStatus = localStorage.getItem("status");
    if (savedBMI && savedStatus) {
      setBMI(savedBMI);
      setStatus(savedStatus);
    }
  }, []);

  const calculateBMI = () => {
    if (height && weight) {
      const calculatedBMI = (weight / (height * height)).toFixed(2);
      setBMI(calculatedBMI);

      let bmiStatus = "";
      if (calculatedBMI < 18.5) {
        bmiStatus = "Underweight";
      } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
        bmiStatus = "Normal weight";
      } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
        bmiStatus = "Overweight";
      } else {
        bmiStatus = "Obesity";
      }
      setStatus(bmiStatus);

      // Save to localStorage
      localStorage.setItem("bmi", calculatedBMI);
      localStorage.setItem("status", bmiStatus);
    }
  };

  const resetData = () => {
    setHeight("");
    setWeight("");
    setBMI(null);
    setStatus("");
    localStorage.removeItem("bmi");
    localStorage.removeItem("status");
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h1 className="mb-4 text-2xl font-bold text-center">BMI Calculator</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Height (meters)
        </label>
        <input
          type="number"
          step="0.01"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          placeholder=" 1.75"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Weight (kg)
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          placeholder=" 70"
        />
      </div>
      <button
        onClick={calculateBMI}
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Calculate BMI
      </button>
      {bmi && (
        <div className="p-4 mt-4 bg-blue-100 rounded-lg">
          <p className="text-lg font-medium">Your BMI: {bmi}</p>
          <p className="text-sm text-gray-700">Status: {status}</p>
        </div>
      )}
      <button
        onClick={resetData}
        className="w-full px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600"
      >
        Reset
      </button>
      {bmi && (
        <div className="mt-4">
          <p className="text-sm text-center text-gray-500">
            Your calculated BMI value is saved locally.
          </p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
