const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('PokemonD');
  const gameContract = await gameContractFactory.deploy(
    ['Chimchar', 'Turtwig', 'Piplup'],
    [
      'https://firebasestorage.googleapis.com/v0/b/cataluv-94a78.appspot.com/o/pokemon%2Fchimchar.png?alt=media',
      'https://firebasestorage.googleapis.com/v0/b/cataluv-94a78.appspot.com/o/pokemon%2Fturtwig.png?alt=media',
      'https://firebasestorage.googleapis.com/v0/b/cataluv-94a78.appspot.com/o/pokemon%piplup.png?alt=media',
    ],
    [100, 200, 300],
    [100, 50, 25],
    ['fireball', 'Rock Slide', 'Bubble']
  );
  await gameContract.deployed();
  console.log('Contract deployed to:', gameContract.address);
  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log('Token URI:', returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
