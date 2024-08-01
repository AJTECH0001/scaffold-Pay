import React, { useState } from "react";
import { dimeAbi } from "../dimeAbi";
import { useSimulateContract, useWriteContract } from "wagmi";

const contractAddress = "0x3d1e462b8b6e4A33f27B521b255D967aFCB8b5c2";

export function TransferOwnership() {
  const [formData, setFormData] = useState({
    address: "",
  });

  const { data } = useSimulateContract({
    address: contractAddress,
    abi: dimeAbi,
    args: [formData.address],
    functionName: "transferOwnership",
  });

  const { writeContractAsync } = useWriteContract();

  const handleTransferOwnership = async () => {
    try {
      if (data && data.request) {
        const response = await writeContractAsync(data.request);
        console.log("Deposit response:", response);
      } else {
        console.error("Invalid contract data:", data);
      }
    } catch (error) {
      console.error("Error depositing:", error);
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-2xl text-center font-bold mb-4">TRANSFER OWNERSHIP</h1>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Transfer ownership </label>

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
        onClick={handleTransferOwnership}
        type="submit"
        className="bg-blue-500  px-6 py-2 rounded-full text-white text-sm lg:h-16 lg:text-base font-bold gap-x-6"
      >
        Transfer Ownership
      </button>
    </div>
  );
}

export default TransferOwnership;
