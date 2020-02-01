# Medical Insurance claiming DApp (for ConsenSys)
Problem statement:
1) Patient logs in, uploads medical/lab test bills and submits it for insurance. Notifications are sent to hospital and lab admin.
2) Hospital admin logs in, verifies and approves the bills. This approval is stored on the smart contract
3) Lab admin approves the lab test bills. This approval is also stored on the smart contract
4) Once both of them approve, notification are sent to insurance admin.
5) Insurance admin can check for approvals of hospital and lab after which he will calculate the claim amount and do the claim.

 `HealthCare.sol` contract maintains the logic for this DApp.  
  The web pages found in the `Web-client` folder are used to communicate with the deployed smart contract and also allow logging in for each specific user
