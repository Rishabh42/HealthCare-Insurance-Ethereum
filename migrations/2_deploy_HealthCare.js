var HealthCare = artifacts.require("./HealthCare.sol");
const TO_LAB_ADMIN_ADDRESS = "0xF6F2F51c07e44efE7BC25E0EC6B332f39d930ac0";

module.exports = function(deployer) {
  deployer.deploy(HealthCare, TO_LAB_ADMIN_ADDRESS);
};
