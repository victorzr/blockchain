const MyToken = artifacts.require("HogToken");

module.exports = function(deployer) {
  deployer.deploy(MyToken);
};
