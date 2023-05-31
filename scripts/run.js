const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  
    const gameContract = await gameContractFactory.deploy(
      ["Anitta", "Ronaldinho Gaúcho", "Zeca Pagodinho"],
          [
              "https://i.imgur.com/gC5qXsl.png",
              "https://i.imgur.com/0PvxtwP.png",
              "https://i.imgur.com/Pj8lHpM.png",
          ],
          [100, 200, 300],
          [100, 50, 25],
          "Capitão Nascimento",
          "https://i.imgur.com/yWpKMDt.png",
          10000,
          50
      );
  
    await gameContract.deployed();
    console.log("Contrato deployado no endereço:", gameContract.address);
  
    let txn;
    // Só temos 3 personagens.
    // Uma NFT com personagem no index 2 da nossa array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
  
    txn = await gameContract.attackBoss();
    await txn.wait();
  
    txn = await gameContract.attackBoss();
    await txn.wait();
  
    console.log("Done!");
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