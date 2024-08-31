# Scaffold-pay - a Crypto Piggy Bank DApp

Project Overview

Scaffold-pay is a decentralized application (DApp) designed to help users manage their cryptocurrency savings and automate bill payments. Utilizing the efficiency and scalability of Ethereum technologies, this DApp aims to provide a secure and user-friendly platform for financial management in the crypto space.

Key Features

Crypto Savings: Users can deposit cryptocurrencies into their scaffold-pay (piggy) wallet to save and grow their assets.

Bill Payments: Scaffold-pay allows users to set up automated payments for their bills. This ensures that bills are paid on time without requiring manual intervention.

Ethereum Integration: By leveraging Ethereum technologies, Scaffold-pay offers fast transactions with reduced gas fees.

## How to Get Started

To get started with Scaffold-pay, follow the steps below:

### Installation

1. Install dependencies if it was skipped in CLI:

```
cd scaffold-pay
yarn install
```

2. Start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. 

## Smart Contract Overview

### Contract Inheritance

Ownable: The contract inherits from OpenZeppelin’s Ownable contract, which provides basic ownership functionality. This allows only the contract owner to execute certain functions, such as adding bills or withdrawing funds.

### Key Functionalities

### Balances:

The contract maintains a balances mapping to store the funds deposited by different addresses.

### Bill Struct:

A Bill struct is defined to represent a bill payment, which includes:
recipient: The address of the bill recipient.
amount: The amount to be paid.
paid: A flag to track if the bill has been paid.
lockDuration: The duration for which the payment is locked.
lockReleaseTime: The timestamp when the locked amount will be released.

### Bills Mapping:

Bill payments are stored in a bills mapping, indexed by a billCount counter.

### Events:

The contract emits the following events to notify external parties:
BillPaid: Emitted when a bill is paid.
BillAdded: Emitted when a new bill is added.

### Modifiers:

sufficientFunds: Ensures that the contract has enough balance to pay a bill before processing the payment.

## Main Functions

### Deposit and Withdraw:

deposit(): Allows users to deposit funds into their scaffold-pay wallet.
withdraw(uint256 amount): Allows the contract owner to withdraw funds from the contract.

### Add Bill:

addBill(address payable recipient, uint256 amount, uint256 lockDurationMins): Allows the owner to add a new bill payment with a specified recipient, amount, and lock duration.

### Pay Bill:

payBill(uint256 billId): Allows the owner to pay a bill once the lock duration has been reached and sufficient funds are available.

### Lock Countdown:

getLockCountdown(uint256 billId): Allows checking the remaining time until the lock release for a specific bill.

### Balance Check:

getBalance(): Returns the current balance of the contract.

### Lock Details:

getLockDetails(uint256 billId): Retrieves the lock details (amount and release time) for a specific bill.

## Example of Contract Usage
### Depositing Funds:

Users can deposit funds into their scaffold-pay wallet by calling the ```deposit``` function.
### Adding a Bill:

The contract owner can add a bill by specifying the recipient’s address, payment amount, and lock duration using the ```addBill``` function.
### Paying a Bill:

Once the lock duration has passed, the owner can pay the bill using the ```payBill``` function.
### Checking Lock Countdown:

The ```getLockCountdown``` function provides the remaining time until the lock duration is over for a specific bill.


### How We Built It
Scaffold-pay was developed using Solidity for the smart contract and Next.js for the frontend. The smart contract is deployed on the Ethereum network, and it uses OpenZeppelin’s libraries for security and best practices.

## Contract Details
Solidity Version: ^0.8.20

## Libraries Used:

@openzeppelin/contracts
SafeMath for secure mathematical operations

## License
This project is licensed under the MIT License. See the LICENSE file for more details.