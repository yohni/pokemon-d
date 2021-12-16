require('@nomiclabs/hardhat-waffle');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/Bqbl9pb9Co21_-renApYtOzWfWhez6t2',
      accounts: [
        'fe55ea3c495b5dc1ccde1af662d7e0b14b02a8931743ec9e02d641e75569ae7d',
      ],
    },
  },
};
