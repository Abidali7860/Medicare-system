import React, { useState, useEffect } from "react";

function MedicineReminder() {
  const [medicine, setMedicine] = useState("");
  const [dosage, setDosage] = useState("");
  const [timing, setTiming] = useState("");
  const [reminders, setReminders] = useState([]);

  // Load reminders from localStorage on initial render
  useEffect(() => {
    const savedReminders = JSON.parse(localStorage.getItem("reminders")) || [];
    setReminders(savedReminders);
  }, []);

  const addReminder = () => {
    if (medicine && dosage && timing) {
      const newReminder = { medicine, dosage, timing };
      const updatedReminders = [...reminders, newReminder];
      setReminders(updatedReminders);

      // Save to localStorage
      localStorage.setItem("reminders", JSON.stringify(updatedReminders));

      // Clear input fields
      setMedicine("");
      setDosage("");
      setTiming("");
    }
  };

  const clearReminders = () => {
    setReminders([]);
    localStorage.removeItem("reminders");
  };

  return (
    <div className="relative max-w-md mx-auto mt-10 bg-white rounded-lg shadow-md top-12 p-7 py-[80px]">
      <h1 className="mb-4 text-2xl font-bold text-center">Medicine Reminder</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Medicine Name
        </label>
        <input
          type="text"
          value={medicine}
          onChange={(e) => setMedicine(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          placeholder=" Paracetamol"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Dosage
        </label>
        <input
          type="text"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          placeholder=" 500mg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Timing
        </label>
        <input
          type="text"
          value={timing}
          onChange={(e) => setTiming(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          placeholder=" Morning, Evening"
        />
      </div>
      <button
        onClick={addReminder}
        className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
      >
        Add Reminder
      </button>
      {reminders.length > 0 && (
        <div className="mt-4">
          <h2 className="mb-2 text-lg font-bold">Reminders</h2>
          <ul className="pl-5 list-disc">
            {reminders.map((reminder, index) => (
              <li key={index} className="text-sm text-gray-700">
                {reminder.medicine} - {reminder.dosage} - {reminder.timing}
              </li>
            ))}
          </ul>
          <button
            onClick={clearReminders}
            className="w-full px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600"
          >
            Clear Reminders
          </button>
        </div>
      )}
    </div>
  );
}

export default MedicineReminder;
