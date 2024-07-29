"use client";

import React from "react";
import { AddBill } from "../../callContract/AddBill";
import BillPayment from "../../callContract/BillPayment";
import ContractAddress from "../../callContract/ContractAddress";
import { Deposit } from "../../callContract/Deposit";
import { RenounceOwnership } from "../../callContract/RenounceOwnership";
import { TransferOwnership } from "../../callContract/TransferOwnership";
import { Withdraw } from "../../callContract/Withdraw";
import { NextPage } from "next";

const Dapp: NextPage = () => {
  return (
    <div>
      <div>
        <ContractAddress />
      </div>
      <div className="grid grid-cols-2 gap-6 m-10">
        <div>
          <AddBill />
        </div>
        <div>
          <Deposit />
        </div>
        <div>
          <BillPayment />
        </div>
        <div>
          <RenounceOwnership />
        </div>
        <div>
          <TransferOwnership />
        </div>
        <div>
          <Withdraw />
        </div>
      </div>
    </div>
  );
};

export default Dapp;
