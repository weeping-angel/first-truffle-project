const SampleContract = artifacts.require('SampleContract.sol');

module.exports = function (deployer) { // deployer object is provided by truffle
    deployer.deploy(SampleContract); // More arguments can be passed for contract's constructor
}