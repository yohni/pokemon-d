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
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log('Minted NFT #1');

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log('Minted NFT #2');

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log('Minted NFT #3');

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log('Minted NFT #4');

  console.log('Done deploying and minting!');
  // Get the value of the NFT's URI.
  // let returnedTokenUri = await gameContract.tokenURI(1);
  // console.log('Token URI:', returnedTokenUri);
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
