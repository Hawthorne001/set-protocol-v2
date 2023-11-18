import { ethers } from "hardhat";
import DeployCoreContracts from "../utils/deploys/deployCoreContracts";
import { add } from "lodash";

async function main() {
  const [deployer] = await ethers.getSigners();

  const deployCoreContracts = new DeployCoreContracts(deployer);
  
  // Add deployment logic here
    const controller = await deployCoreContracts.deployController(deployer.address);
    console.log(`Controller deployed to: ${controller.address}`);

    const setTokenCreator = await deployCoreContracts.deploySetTokenCreator(controller.address);
    console.log(`SetTokenCreator deployed to: ${setTokenCreator.address}`);

    const integrationRegistry = await deployCoreContracts.deployIntegrationRegistry(controller.address);
    
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
