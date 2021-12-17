const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('PokemonD');
  const gameContract = await gameContractFactory.deploy(
    ['Chimchar', 'Turtwig', 'Piplup'],
    [
      'https://firebasestorage.googleapis.com/v0/b/cataluv-94a78.appspot.com/o/pokemon%2Fchimchar.png?alt=media',
      'https://firebasestorage.googleapis.com/v0/b/cataluv-94a78.appspot.com/o/pokemon%2Fturtwig.png?alt=media',
      'https://firebasestorage.googleapis.com/v0/b/cataluv-94a78.appspot.com/o/pokemon%piplup.png?alt=media',
    ],
    [200, 250, 300],
    [50, 40, 30],
    ['Flame Wheel', 'Razor Leaf', 'Bubble'],
    'Arceus',
    'https://firebasestorage.googleapis.com/v0/b/cataluv-94a78.appspot.com/o/pokemon%2Farceus.png?alt=media',
    10000,
    90,
    'Hyper Beam'
  );
  await gameContract.deployed();
  console.log('Contract deployed to:', gameContract.address);
  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();

  // Get the value of the NFT's URI.
  // let returnedTokenUri = await gameContract.tokenURI(1);
  // console.log('Token URI:', returnedTokenUri);\

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();
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
