import React, { useState } from "react";
import { dimeAbi } from "../dimeAbi";
import Modal from "./Modal";
import { useSimulateContract, useWriteContract } from "wagmi";

// Import the Modal component

const BillPayment = () => {
  const [formData, setFormData] = useState({
    billId: "",
  });

  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [errorMessage, setErrorMessage] = useState(""); // State to track any errors

  const { data } = useSimulateContract({
    address: "0x3d1e462b8b6e4A33f27B521b255D967aFCB8b5c2",
    abi: dimeAbi,
    args: [formData.billId],
    functionName: "payBill",
  });

  const { writeContractAsync } = useWriteContract();

  const validateInput = () => {
    if (!formData.billId) {
      setErrorMessage("Bill ID is required.");
      return false;
    }
    if (!/^0x[a-fA-F0-9]{64}$/.test(formData.billId)) {
      setErrorMessage("Please enter a valid Bill ID (64 character hex).");
      return false;
    }
    return true;
  };

  const handlePayBill = async () => {
    setErrorMessage(""); // Clear any previous errors before starting
    if (!validateInput()) return; // Validate input before proceeding

    try {
      if (data && data.request) {
        const response = await writeContractAsync(data.request);
        console.log("Pay Bill response:", response);
        setShowModal(false); // Close the modal on successful transaction
      } else {
        throw new Error("Invalid contract data."); // Throw an error if contract data is invalid
      }
    } catch (error) {
      console.error("Error paying bill:", error);

      // Type narrowing for error handling
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <button
        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Pay Bill
      </button>

      {showModal ? (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Pay Bill">
          <div className="m-5">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bill ID</label>
              <input
                type="text"
                className="shadow-sm px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Bill ID"
                required
                onChange={event => {
                  setFormData(prev => ({ ...prev, billId: event.target.value }));
                }}
              />
            </div>

            {/* Display error message if there's an error */}
            {errorMessage && <div className="text-red-500 text-sm mb-4">{errorMessage}</div>}

            <button
              onClick={handlePayBill}
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
};

export default BillPayment;
