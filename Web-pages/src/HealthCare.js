import web3 from './web3';

const address = "0x78a5c32ea41a095b4b56197e40b892f03a0b97a7";

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ID",
				"type": "uint256"
			},
			{
				"name": "_tName",
				"type": "string"
			},
			{
				"name": "_date",
				"type": "string"
			},
			{
				"name": "hName",
				"type": "string"
			},
			{
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "newRecord",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ID",
				"type": "uint256"
			}
		],
		"name": "signRecord",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "ID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "testName",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "date",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "hospitalName",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "recordCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "ID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "testName",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "date",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "hospitalName",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "recordSigned",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_records",
		"outputs": [
			{
				"name": "pAddr",
				"type": "address"
			},
			{
				"name": "ID",
				"type": "uint256"
			},
			{
				"name": "testName",
				"type": "string"
			},
			{
				"name": "date",
				"type": "string"
			},
			{
				"name": "hospitalName",
				"type": "string"
			},
			{
				"name": "price",
				"type": "uint256"
			},
			{
				"name": "isValue",
				"type": "bool"
			},
			{
				"name": "signatureCount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "recordsArr",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

export default new web3.eth.Contract(abi, address);
