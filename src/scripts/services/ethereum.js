'use strict';

const Web3 = require('web3');
const squba = require('squba');

const contract_ids = require('../lib/contract_ids.js');
const abi_bin = require('../lib/abi_bin.js');
const networks = require('../lib/networks.js');

const genericCallback = (err, res) => {
  err && console.error(err);
  console.log(res);
};

angular
  .module('app')
  .service('ethereum', ethereum);

function ethereum() {

  const server_contracts = {};

  initialize();

  return {
    getPolicies
  };


  function initialize() {

    // MetaMask injects the web3 object for us
    if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider);
    } else {
      // If there's not web3 object then we initialize one
      console.log('No web3? You should consider trying MetaMask!')
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    console.log('Server started');
    web3.eth.getBlockNumber((err, res) => {
      console.log(`BlockNumber: ${res}`);
    });

    // get the address resolver contract, just a SYNC call
    const RSC_AddressResolver = web3.eth
      .contract(abi_bin.abi.RSC_AddressResolver)
      .at(networks.ropsten.AddressResolver_addr);

    getAllContracts(contract_ids.contracts);


    // interate over contracts and add them to server_contracts (async)
    function getAllContracts(contracts) {
      for (let contract in contracts) {
        getContract(contract);
      }
    };

    // get the contract address (async)
    function getContract(contract) {
      RSC_AddressResolver.getAddress(web3.sha3(contract), (err, address) => {
        if (err) {
          console.error(err);
          return;
        }
        // get the contract at that adress and add it to the server_contracts list (async)
        web3.eth.contract(abi_bin.abi[contract]).at(address, (err, res) => {
          server_contracts[contract] = res;
        });
      });
    }
  }

  function getPolicies() {
    console.log('Method Call: getPolicies');

    if (typeof squba(server_contracts, 'RSC_Insurance') === 'undefined') {
      console.log('Did not load the policies yet.');
      return new Promise((resolve) => resolve([]));
    }

    return getPolicyCount(server_contracts.RSC_Insurance)
      .then(policyCount => {

        var policies = [];

        for (let index = 0; index < policyCount; index++) {
          const policyPromise = getPolicyByIndex(server_contracts.RSC_Insurance, index);
          policies.push(policyPromise);
        }

        return Promise.all(policies);
      });
  }
}

function getPolicyByIndex(RSC_Insurance, index) {
  return new Promise(function(resolve, reject) {
    RSC_Insurance.policies(index, (err, row) => {
      if (err) {
        reject(err);
        return;
      }
      row.push(row[0].slice(0,7));
      row[1] = web3.fromWei(row[1], 'ether').toFixed(4);
      row[3] = web3.toDecimal(row[3]) / 10000;
      row[5] = new Date(web3.toDecimal(row[5]) * 1000).toUTCString();
      row[7] = web3.fromWei(row[7], 'ether').toFixed(4);
      row[8] = web3.fromWei(row[8], 'ether').toFixed(4);

      resolve(row);
    });
  });
}

function getPolicyCount(RSC_Insurance) {
  return new Promise(function(resolve, reject) {
    RSC_Insurance.getPolicyCount((err, res) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(res.toNumber());  // it is a BigNumber so needs to be transformed
    });
  });
}
