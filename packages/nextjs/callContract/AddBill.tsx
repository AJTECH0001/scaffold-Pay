import React, { useState } from "react";
import { dimeAbi } from "../dimeAbi";
import { parseEther } from "viem";
import { useSimulateContract, useWriteContract } from "wagmi";

export function AddBill() {
  const [formData, setFormData] = useState({
    amount: "",
    address: "",
    lockDuration: "",
  });

  console.log(formData);

  const { data, error } = useSimulateContract({
    address: "0x3d1e462b8b6e4A33f27B521b255D967aFCB8b5c2",
    abi: dimeAbi,
    args: [formData.address, parseEther(formData.amount), formData.lockDuration],
    functionName: "addBill",
  });

  console.log("Simulate Contract data:", data);
  console.log("Simulate Contract error:", error);

  const { writeContractAsync } = useWriteContract();

  const handleAddBill = async () => {
    try {
      if (data && data.request) {
        const response = await writeContractAsync(data.request);
        console.log("Add Bill response:", response);
      } else {
        console.error("Invalid contract data:", data);
      }
    } catch (error) {
      console.error("Error adding bill:", error);
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-2xl text-center font-bold mb-4">ADD BILL</h1>
      <div className="m-5">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your address</label>
          <input
            type="text"
            className="shadow-sm px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Address"
            required
            onChange={event => {
              setFormData(prev => ({ ...prev, address: event.target.value }));
            }}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2  text-sm font-medium text-gray-900 dark:text-white">Enter amount</label>

          <input
            type="text"
            className="shadow-sm bg-gray-50 px-4 py-2 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Amount"
            required
            onChange={event => {
              setFormData(prev => ({ ...prev, amount: event.target.value }));
            }}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lock duration</label>

          <input
            type="text"
            className="shadow-sm px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="LockDuration"
            required
            onChange={event => {
              setFormData(prev => ({ ...prev, lockDuration: event.target.value }));
            }}
          />
        </div>
        <button
          onClick={handleAddBill}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Confirm Transaction
        </button>
      </div>
    </div>
  );
}

export default AddBill;
