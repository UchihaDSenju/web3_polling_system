import { genIns1, genIns2, genIns3, genIns4, genIns5, genIns6, genIns7 } from "../media";

export const contractAddress = "0x4538eF4E1865F1cb5a5db2410D73BCf54C83Df9D";
export const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_party",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_education",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_logo",
				"type": "string"
			}
		],
		"name": "addCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_voterAddress",
				"type": "address"
			}
		],
		"name": "addVoter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "party",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "education",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "logo",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "numberOfVotes",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCandidates",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "party",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "education",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "logo",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "numberOfVotes",
						"type": "uint256"
					}
				],
				"internalType": "struct VoterDetail.CandidateDetail[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "numberOfCandidates",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "parties",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_party",
				"type": "string"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voterDetails",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isVoter",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "hasVoted",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Sepolia contract 0x7416e1080f5bAde22c9F8FaF527ffd28FeaEd1a6
// Sepolia Saheel Contract 0x4538eF4E1865F1cb5a5db2410D73BCf54C83Df9D
// Ganache contract 0x3df99e6a16EBE887d7009A78BeB185577CbB7390

export const datas = {
	generalInstructions: [
		{
			'image': genIns1,
			'title': 'Install MetaMask Wallet',
			'desc': 'Go to chrome extension store and install metamask Wallet to be able to use the webapp'
		},
		{
			'image': genIns2,
			'title': 'Select Sepolia Network',
			'desc': 'Click the burger on the left corner and Select Show test networks and you will be able to see Sepolia Network'
		},
		{
			'image': genIns3,
			'title': 'Check network',
			'desc': 'Now that you have sepolia network initially you will have 0 Sepolia eth but you can get them through faucet'
		},
		{
			'image': genIns4,
			'title': 'Get Sepolia ETH',
			'desc': 'Go to Ethereum Sepolia faucet and input your wallet public address, and Voila you will have 0.5 Sepolia ETH in your account'
		},
	],
	generalInstructionsAndroid: [
		{
			'image': genIns5,
			'title': 'Install MetaMask Wallet',
			'desc': 'Go to playstore and Install Metamask'
		},
		{
			'image': genIns6,
			'title': 'Select Sepolia Network',
			'desc': 'From the default Ethereum main net choose Sepolia tetsnet'
		},
		{
			'image': genIns7,
			'title': 'Use the browser in Metamask App',
			'desc': 'Use the application from the Metamak app for easy Wallet connectivity'
		},
	]
}