import React, { useState } from "react";
import { dimeAbi } from "../dimeAbi";
import Modal from "./Modal";
import { useSimulateContract, useWriteContract } from "wagmi";

// Ensure Modal component is in the correct directory

export function Deposit() {
  const [formData, setFormData] = useState({
    deposit: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(formData);

  const { data } = useSimulateContract({
    address: "0x3d1e462b8b6e4A33f27B521b255D967aFCB8b5c2",
    abi: dimeAbi,
    args: [],
    functionName: "deposit",
  });

  const { writeContractAsync } = useWriteContract();

  const handleDeposit = async () => {
    try {
      if (data && data.request) {
        const response = await writeContractAsync(data.request);
        console.log("Deposit response:", response);
        setIsModalOpen(false); // Close modal after successful deposit
      } else {
        console.error("Invalid contract data:", data);
      }
    } catch (error) {
      console.error("Error depositing:", error);
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <button
        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg ease-linear transition-all duration-150"
        type="button"
        onClick={() => setIsModalOpen(true)}
      >
        Deposit
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Confirm Deposit">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deposit</label>
          <input
            className="shadow-sm px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            placeholder="Amount"
            onChange={event => {
              setFormData(prev => ({ ...prev, deposit: event.target.value }));
            }}
          />
        </div>

        <button
          onClick={handleDeposit}
          type="submit"
          className="bg-blue-500 px-6 py-2 rounded-full text-white text-sm lg:h-16 lg:text-base font-bold gap-x-6"
        >
          Confirm Deposit
        </button>
      </Modal>
    </div>
  );
}

export default Deposit;
