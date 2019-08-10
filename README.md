# High level use case
Problem statement:
1) Patient logs in, uploads medical/lab tests bills and submits it for insurance. Notifications are sent to hospital and lab admin.
2) Hospital admin logs in, verifies and approves the bills. This approval should be stored on a smart contract
3) Lab admin approves the lab tests bills. This approval should be stored on a smart contract
4) Once both of them approves, notification should be sent to insurance admin.
5) Insurance admin can check for approvals of hospital and lab after which he will calculate the claim amount and do the claim.

 `HealthCare.sol` contract maintains the logic for this DApp.  
  The web pages found in the `Web-client` folder are used to communicate with the deployed smart contract and also allow logging in for each specific user
