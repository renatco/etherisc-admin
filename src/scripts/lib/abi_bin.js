var abi_bin = {};
abi_bin.abi = {
  "RSC_AddressResolver": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "hash",
          "type": "bytes32"
        }
      ],
      "name": "getAddress",
      "outputs": [
        {
          "name": "_oaddr",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "addresses",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_newowner",
          "type": "address"
        }
      ],
      "name": "changeOwner",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "hash",
          "type": "bytes32"
        }, {
          "name": "_newaddr",
          "type": "address"
        }
      ],
      "name": "setAddr",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    }
  ],
  "RSC_Token": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        }, {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "setOwner",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        }, {
          "name": "_to",
          "type": "address"
        }, {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "Symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_newTotalSupply",
          "type": "uint256"
        }
      ],
      "name": "setNewTotalSupply",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "riskManager",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "version",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_newRiskManager",
          "type": "address"
        }
      ],
      "name": "setRiskManager",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        }, {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        }, {
          "name": "_value",
          "type": "uint256"
        }, {
          "name": "_extraData",
          "type": "bytes"
        }
      ],
      "name": "approveAndCall",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }, {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "remaining",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "inputs": [
        {
          "name": "_initialAmount",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "constructor"
    }, {
      "payable": false,
      "type": "fallback"
    }, {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        }, {
          "indexed": true,
          "name": "_to",
          "type": "address"
        }, {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        }, {
          "indexed": true,
          "name": "_spender",
          "type": "address"
        }, {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    }
  ],
  "RSC_SimpleSale": [
    {
      "constant": true,
      "inputs": [],
      "name": "TOTAL_TOKENS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "STARTBLOCK",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "saleFinished",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "setNewTotalSupply",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "FUNDING_GOAL",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "tokenPrice",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenPrice",
          "type": "uint256"
        }
      ],
      "name": "setPrice",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [],
      "name": "tokenSale",
      "outputs": [],
      "payable": true,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_RSC_Token",
          "type": "address"
        }
      ],
      "name": "setTokenContract",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "totalRaised",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "RSC_Token_Contract",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "MAXIMUM_SALE_BLOCK",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    }, {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "investor",
          "type": "address"
        }, {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Log_Sale",
      "type": "event"
    }
  ],
  "RSC_Insurance": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_policyId",
          "type": "uint256"
        }
      ],
      "name": "expirePolicy",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_risk",
          "type": "string"
        }
      ],
      "name": "newPolicy",
      "outputs": [],
      "payable": true,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_policyId",
          "type": "uint256"
        }, {
          "name": "_payout",
          "type": "uint256"
        }, {
          "name": "_claim",
          "type": "string"
        }
      ],
      "name": "payOut",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "decrease_fund",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "riskManager",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [
        {
          "name": "_customer",
          "type": "address"
        }
      ],
      "name": "getPolicyCount",
      "outputs": [
        {
          "name": "_count",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_riskManager",
          "type": "address"
        }
      ],
      "name": "setRiskManager",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [],
      "name": "increase_fund",
      "outputs": [],
      "payable": true,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_oracle",
          "type": "address"
        }
      ],
      "name": "setOracle",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "oracle",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "balance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "policies",
      "outputs": [
        {
          "name": "customer",
          "type": "address"
        }, {
          "name": "premium",
          "type": "uint256"
        }, {
          "name": "risk",
          "type": "string"
        }, {
          "name": "probability",
          "type": "uint256"
        }, {
          "name": "state",
          "type": "uint8"
        }, {
          "name": "stateTime",
          "type": "uint256"
        }, {
          "name": "stateMessage",
          "type": "string"
        }, {
          "name": "calculatedPayout",
          "type": "uint256"
        }, {
          "name": "actualPayout",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [
        {
          "name": "_policyId",
          "type": "uint256"
        }, {
          "name": "_probability",
          "type": "uint256"
        }, {
          "name": "_doUnderwrite",
          "type": "bool"
        }
      ],
      "name": "underwrite",
      "outputs": [],
      "payable": false,
      "type": "function"
    }, {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    }, {
      "payable": false,
      "type": "fallback"
    }, {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "policyId",
          "type": "uint256"
        }, {
          "indexed": false,
          "name": "customer",
          "type": "address"
        }, {
          "indexed": false,
          "name": "risk",
          "type": "string"
        }, {
          "indexed": false,
          "name": "premium",
          "type": "uint256"
        }
      ],
      "name": "LOG_PolicyApplied",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "policyId",
          "type": "uint256"
        }
      ],
      "name": "LOG_PolicyAccepted",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "policyId",
          "type": "uint256"
        }, {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "LOG_PolicyPaidOut",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "policyId",
          "type": "uint256"
        }
      ],
      "name": "LOG_PolicyExpired",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "policyId",
          "type": "uint256"
        }, {
          "indexed": false,
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "LOG_PolicyDeclined",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "policyId",
          "type": "uint256"
        }, {
          "indexed": false,
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "LOG_SendFail",
      "type": "event"
    }
  ],
  "RSC_RiskManager": []
};
module.exports = abi_bin;
