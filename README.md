# Medical Insurance claiming DApp (for ConsenSys)
Problem statement:
1) Patient logs in, uploads medical/lab test bills and submits it for insurance. Notifications are sent to hospital and lab admin.
2) Hospital admin logs in, verifies and approves the bills. This approval is stored on the smart contract
3) Lab admin approves the lab test bills. This approval is also stored on the smart contract
4) Once both of them approve, notification are sent to insurance admin.
5) Insurance admin can check for approvals of hospital and lab after which he will calculate the claim amount and do the claim.

 `HealthCare.sol` contract maintains the logic for this DApp.  
  The web pages found in the `Web-client` folder are used to communicate with the deployed smart contract and also allow logging in for each specific user

## Steps to deploy and interact with the contract:
1. Copy and paste the contract code on https://remix.ethereum.org/
2. Run an instance of ganache-cli on your local machine and connect your metamask wallet to it. Also, add the first 3 accounts from ganache to your metamask by importing their private keys and assign the following names to it:  
    account 1: Hospital admin  
    account 2: Lab admin  
    account 3: Patient  
3. Replace the Lab admin's address inside the constructor on line 27 with the Lab admin's address that we configured in the previous step.
4. Select `Injected Web3` in the `Environment` field and make sure your Metamask wallet is unlocked. This will connect Remix to the first account(Hospital admin) in your Metamask wallet.
5. Deploy the contract
6. Select Account 3(Patient) and created a new medical record by calling the `newRecord` function with the respective fields.
7. You can check if the record was created and it's details by calling the `_records` mapping with index 1.
8. To sign the record, switch back to account 1(Hospital admin) in Metamask, enter the record's `_ID` in the `signRecord` function and click on transact.
9. Repeat the same steps using account 2(Lab Admin) from metamask.
10. Now the record is approved and you can verify the same by calling the `_records` mapping again where you can see that the `signatureCount` has incremented. 

Note that you can not sign the record using the patient's account from metamask and neither can the same account sign a record twice.

Update:  
With Remix's new interface, you need to change the account address from the `ACCOUNT` drop down on the `Deploy and Run` tab (required in step 8):  

<img width="369" alt="Screenshot 2021-05-02 at 2 10 52 PM" src="https://user-images.githubusercontent.com/20457952/117578650-f00c6480-b10c-11eb-906e-c5ff79252585.png">

## Known issues:  
- The table on the React front end doesn't display the records created by the user (Issue #1)
