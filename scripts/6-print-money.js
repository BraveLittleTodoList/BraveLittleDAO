import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken("0x0887e662bd16DF1E8113e51b2F2BA40b7ace6b02");

(async () => {
  try {
    const amount = 100000000;
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    console.log("✅ There now is", totalSupply.displayValue, "$BLT in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();