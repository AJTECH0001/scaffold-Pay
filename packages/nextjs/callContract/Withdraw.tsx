import React, { useState } from "react";
import { dimeAbi } from "../dimeAbi";
import Modal from "./Modal";
import { useSimulateContract, useWriteContract } from "wagmi";

// Import the Modal component

const contractAddress = "0x3d1e462b8b6e4A33f27B521b255D967aFCB8b5c2";

export function Withdraw() {
  const [formData, setFormData] = useState({
    amount: "",
  });

  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [errorMessage, setErrorMessage] = useState(""); // State to track any errors

  const { data } = useSimulateContract({
    address: contractAddress,
    abi: dimeAbi,
    args: [formData.amount],
    functionName: "withdraw",
  });

  const { writeContractAsync } = useWriteContract();

  // Validate the withdraw amount input
  const validateAmount = (amount: string) => {
    const parsedAmount = parseFloat(amount);
    if (!amount) {
      setErrorMessage("Withdraw amount is required.");
      return false;
    }
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setErrorMessage("Please enter a valid number.");
      return false;
    }
    return true;
  };

  const handleWithdraw = async () => {
    // Clear any previous error
    setErrorMessage("");

    // Validate the input
    if (!validateAmount(formData.amount)) return;

    try {
      if (data && data.request) {
        const response = await writeContractAsync(data.request);
        console.log("Withdraw response:", response);
        setShowModal(false); // Close the modal on successful transaction
        setErrorMessage(""); // Clear error message on success
      } else {
        throw new Error("Invalid contract data.");
      }
    } catch (error) {
      console.error("Error withdrawing:", error);
      setErrorMessage("An error occurred while processing the transaction.");
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <button
        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Withdraw
      </button>

      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Withdraw">
          <div className="m-5">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Withdraw Amount</label>
              <input
                type="text"
                className="shadow-sm px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Amount"
                required
                value={formData.amount}
                onChange={event => {
                  setFormData(prev => ({ ...prev, amount: event.target.value }));
                }}
              />
            </div>

            {/* Display error message if there's an issue */}
            {errorMessage && <div className="text-red-500 text-sm mb-4">{errorMessage}</div>}

            <button
              onClick={handleWithdraw}
              type="submit"
              className="bg-blue-500 px-6 py-2 rounded-full text-white text-sm lg:h-16 lg:text-base font-bold gap-x-6"
            >
              Confirm Transaction
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Withdraw;
