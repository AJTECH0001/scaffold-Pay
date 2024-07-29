"use client";

import React from "react";
import { dimeAbi } from "../dimeAbi";
import { useWriteContract } from "wagmi";

const contractAddress = "0x3d1e462b8b6e4A33f27B521b255D967aFCB8b5c2";

export function RenounceOwnership() {
  const { writeContractAsync } = useWriteContract();

  const handleRenounceOwnership = async () => {
    try {
      const response = await writeContractAsync({
        address: contractAddress,
        abi: dimeAbi,
        functionName: "renounceOwnership",
        args: [], // No arguments for this function
      });
      console.log("Renounce Ownership response:", response);
    } catch (error) {
      console.error("Error calling renounceOwnership function:", error);
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-2xl text-center font-bold mb-4">RENOUNCE OWNERSHIP</h1>
      <button
        onClick={handleRenounceOwnership}
        type="submit"
        className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Renounce Ownership
      </button>
    </div>
  );
}

export default RenounceOwnership;
