'use strict';

const Web3 = require('web3');
const squba = require('squba');

const contract_ids = require('../lib/contract_ids.js');
const abi_bin = require('../lib/abi_bin.js');
const networks = require('../lib/networks.js');

const mainNetMsg = () => 'Attention: Your metamask is connected to mainnet. ' +
'Don\'t use this prototype on mainnet - it can result in loss of money!';

const metamaskMsg = () => 'Attention: Your metamask is not connected to testnet.' +
' Only use this prototype on testnet - otherwise it can result in loss of money!';


angular
  .module('app')
  .service('ethereum', ethereum);

function ethereum() {

  const server_contracts = {};

  const state = {

  };

  initialize();

  return {
    getPolicies,
    tokenSale,
    state
  };

  function web3Connect() {
    return new Promise(function(resolve, reject) {
      // MetaMask injects the web3 object for us
      if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
        resolve(web3);
        return;
      }
      // If there's not web3 object then we initialize one
      const message = 'No web3? You should consider trying MetaMask!';
      console.warn(message);
      reject({ message });
    });
  }

  function getNetwork() {
    return new Promise((resolve, reject) => {
      web3.version.getNetwork((err, res) => {
        if (res !== 3 && res !== '3') {
          reject({message: 'Connected to the wrong network!'});
          return;
        }
        resolve({network: res});
      });
    });
  }

  function getBalance() {
    return new Promise((resolve, reject) => {
      web3.eth.getBalance(web3.eth.accounts[0], (err, res) => {
        resolve({
          web3_Connected: true,
          balance: web3.fromWei(res).toFixed(2),
          account: web3.eth.accounts[0]
        });
      });
    });
  }


  function initialize() {

    web3Connect()
    .then(getNetwork, err => {state.message = err.message;})
    .then(({network}) => {
      state.network = network;
      return true;
    }, err => {state.message = err.message;})
    .then(getBalance)
    .then(({web3_Connected, balance, account}) => {
      state.web3_Connected = web3_Connected;
      state.balance = balance;
      state.account = account;
      return true;
    })
    .then(() => {

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
    }); // .then

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

  function tokenSale(amount) {
    var tx = {
      value: web3.toWei(amount, 'ether')
    };

    return new Promise((resolve, reject) => {
      web3.version.getNetwork((err, res) => {
        if (res == 1) {
          const error = {message: mainNetMsg()};
          reject({
            success: false,
            message: error.message.slice(0, error.message.indexOf('\n')),
            hash: ''
          });
          return;
        }
        if (res !== 3 && res !== '3') {
          const error = {message: metamaskMsg()};
          reject({
            success: false,
            message: error.message.slice(0, error.message.indexOf('\n')),
            hash: ''
          });
          return;
        }
        try {

          server_contracts.RSC_SimpleSale.tokenSale(tx, (err, result) => {
            if (err) {
              reject({
                success: false,
                message: err.message.slice(0, err.message.indexOf('\n')),
                hash: ''
              });
              return;
            }
            resolve({
              success: true,
              message: result,
              hash: result
            });
          });

        } catch (e) {
          reject({
            success: false,
            message: e.message.slice(0, e.message.indexOf('\n')),
            hash: ''
          });
        }
      });
    });
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

}
