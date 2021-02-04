import "reflect-metadata";
import fs from "fs";
import { generateSchema } from "./generate-schema";

(async () => {
  const [rulesPath] = process.argv.slice(2);
  const rules = (await import(rulesPath)).default;
  fs.writeFileSync(".rules", JSON.stringify(generateSchema(rules)));
  console.log("Firebase rules creation success.");
})();
