import React, { useState } from "react";

function MyProfile() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    alert("Profile saved successfully!");
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-lg shadow-md pt-[40px]">
      <h1 className="mb-4 text-2xl font-bold text-center">My Profile</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          placeholder=" John Doe"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          placeholder=" 175"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          placeholder=" 70"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Blood Group</label>
        <input
          type="text"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          placeholder=" O+"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          placeholder=" 30"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          placeholder=" 91+"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
      >
        Save Profile
      </button>
    </div>
  );
}

export default MyProfile;