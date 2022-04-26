import sdk from "./1-initialize-sdk.js";
import { readFileSync} from "fs";

const editionDrop = sdk.getEditionDrop("0xE580fE39062A6990F8826EA3347d8dc21003Ea1A");

(async () => {
    try {
      await editionDrop.createBatch([
        {
          name: "Laser Bear Arnold",
          description: "This NFT will give you access to BraveLittleDAO",
          image: readFileSync("scripts/assets/Logo.jpeg"),
        },
      ]);
      console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
      console.error("failed to create the new NFT", error);
    }
  })();