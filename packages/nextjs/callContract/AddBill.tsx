import React, { useState } from "react";
import { dimeAbi } from "../dimeAbi";
import Modal from "./Modal";
import { parseEther } from "viem";
import { useSimulateContract, useWriteContract } from "wagmi";

// Import your Modal component

export function AddBill() {
  const [formData, setFormData] = useState({
    amount: "",
    address: "",
    lockDuration: "",
  });

  const [errors, setErrors] = useState({
    address: "",
    amount: "",
    lockDuration: "",
  });

  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const { data, error } = useSimulateContract({
    address: "0x3d1e462b8b6e4A33f27B521b255D967aFCB8b5c2",
    abi: dimeAbi,
    args: [formData.address, parseEther(formData.amount), formData.lockDuration],
    functionName: "addBill",
  });

  const { writeContractAsync } = useWriteContract();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { address: "", amount: "", lockDuration: "" };

    // Address validation (basic Ethereum-like address check)
    if (!/^0x[a-fA-F0-9]{40}$/.test(formData.address)) {
      newErrors.address = "Please enter a valid address.";
      isValid = false;
    }

    // Amount validation (must be a number and greater than 0)
    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount <= 0) {
      newErrors.amount = "Please enter a valid amount greater than 0.";
      isValid = false;
    }

    // Lock duration validation (must be an integer and greater than 0)
    const lockDuration = parseInt(formData.lockDuration);
    if (isNaN(lockDuration) || lockDuration <= 0) {
      newErrors.lockDuration = "Please enter a valid lock duration in seconds.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleAddBill = async () => {
    if (!validateForm()) return; // Stop if validation fails

    try {
      if (data && data.request) {
        const response = await writeContractAsync(data.request);
        console.log("Add Bill response:", response);
        setShowModal(false); // Close the modal on successful transaction
      } else {
        console.error("Invalid contract data:", data);
      }
    } catch (error) {
      console.error("Error adding bill:", error);
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <button
        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Bill
      </button>

      {showModal ? (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add Bill">
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
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter amount</label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 px-4 py-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Amount"
                required
                onChange={event => {
                  setFormData(prev => ({ ...prev, amount: event.target.value }));
                }}
              />
              {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lock duration</label>
              <input
                type="text"
                className="shadow-sm px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Lock Duration (seconds)"
                required
                onChange={event => {
                  setFormData(prev => ({ ...prev, lockDuration: event.target.value }));
                }}
              />
              {errors.lockDuration && <p className="text-red-500 text-sm">{errors.lockDuration}</p>}
            </div>

            <button
              onClick={handleAddBill}
              type="submit"
              className="bg-blue-500 px-6 py-2 rounded-full text-white text-sm lg:h-16 lg:text-base font-bold gap-x-6"
            >
              Confirm Transaction
            </button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

export default AddBill;
