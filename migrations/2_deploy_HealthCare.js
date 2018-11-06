var HealthCare = artifacts.require("./HealthCare.sol");

module.exports = function(deployer) {
  deployer.deploy(HealthCare);
};
