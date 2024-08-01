import React, { useState } from "react";
import { dimeAbi } from "../dimeAbi";
import { useSimulateContract, useWriteContract } from "wagmi";

const BillPayment = () => {
  const [formData, setFormData] = useState({
    billId: "",
  });

  console.log(formData);

  const { data, error } = useSimulateContract({
    address: "0x3d1e462b8b6e4A33f27B521b255D967aFCB8b5c2",
    abi: dimeAbi,
    args: [formData.billId],
    functionName: "payBill",
  });

  console.log("Simulate Contract data:", data);
  console.log("Simulate Contract error:", error);

  const { writeContractAsync } = useWriteContract();

  const handleAddBill = async () => {
    try {
      if (data && data.request) {
        const response = await writeContractAsync(data.request);
        console.log("Pay Bill response:", response);
      } else {
        console.error("Invalid contract data:", data);
      }
    } catch (error) {
      console.error("Error paying bill:", error);
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-2xl text-center font-bold mb-4">PAY BILL</h1>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">pay bill </label>

        <input
          className="shadow-sm px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
          placeholder="Amount"
          onChange={event => {
            setFormData(prev => ({ ...prev, billId: event.target.value }));
          }}
        />
      </div>

      <button
        onClick={handleAddBill}
        type="submit"
        className="bg-blue-500  px-6 py-2 rounded-full text-white text-sm lg:h-16 lg:text-base font-bold gap-x-6"
      >
        Confirm Transaction
      </button>
    </div>
  );
};

export default BillPayment;
