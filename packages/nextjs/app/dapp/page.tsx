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
    <div className=" m-10 ">
      <div className="">
        <ContractAddress />
        <AddBill />
        <Deposit />
        <BillPayment />
        <RenounceOwnership />
        <TransferOwnership />
        <Withdraw />
      </div>
    </div>
  );
};

export default Dapp;
