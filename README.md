# Scaffold-pay - a Crypto Piggy Bank DApp

Project Overview

Scaffold-pay is a decentralized application (DApp) designed to help users manage their cryptocurrency savings and automate bill payments. Utilizing the efficiency and scalability of Ethereum technologies, this DApp aims to provide a secure and user-friendly platform for financial management in the crypto space.

Key Features
Crypto Savings: Users can deposit cryptocurrencies into their Dime (piggy) wallet.
Bill Payments: Dime will allow users to set up automated payments for their bills, ensuring they are paid on time without manual intervention.
Ethereum Integration: By leveraging Ethereum solutions, Scaffold-pay will offer fast transactions with reduced gas fees.



To get started with Scaffold-pay, follow the steps below:

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


# How we built it

Inheritance: The contract inherits from the Ownable contract, which provides basic ownership functionality.

Balances: The contract maintains a mapping balances to store the funds deposited by different addresses.

Bill Struct: The contract defines a Bill struct to represent a bill payment, including the recipient's address, the payment amount, a paid flag, the lock duration, and the lock release time.

Bills Mapping: The contract stores the bill payments in a mapping bills, indexed by a billCount counter.

Events: The contract emits two events: BillPaid and BillAdded to notify external parties of bill payments and additions.

Modifiers: The contract has a sufficientFunds modifier to ensure that the contract has enough balance to pay a bill.

Deposit and Withdraw: The contract provides functions to deposit and withdraw funds from the contract's balance.

Add Bill: The addBill function allows the owner to add a new bill payment, with the recipient's address, the payment amount, and the lock duration.

Pay Bill: The payBill function allows the owner to pay a bill, provided that the lock duration has been reached and the contract has sufficient funds.

Lock Countdown: The getLockCountdown function allows checking the remaining time until the lock release for a specific bill.

Balance Check: The getBalance function allows checking the current balance of the contract.

Lock Details: The getLockDetails function allows retrieving the lock details (amount and release time) for a specific bill.
