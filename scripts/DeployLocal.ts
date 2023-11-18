import { ethers } from "hardhat";
import DeployCoreContracts from "../utils/deploys/deployCoreContracts.ts";

async function main() {
  const [deployer] = await ethers.getSigners();

  const deployCoreContracts = new DeployCoreContracts(deployer);
  
  // Add deployment logic here
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
