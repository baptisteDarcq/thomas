const fs = require("fs");
const path = require("path");

const appNameDirectory = process.argv[2];

const commonAssetsDir = path.join(__dirname, "../assets/images");
const appAssetsDir = path.join(
  __dirname,
  `../apps/${appNameDirectory}/assets/images`
);
const outputAppFilePath = path.join(
  __dirname,
  `../apps/${appNameDirectory}/assets/generatedAssetsMap.ts`
);
const outputCommonFilePath = path.join(
  __dirname,
  `../assets/generatedAssetsMap.ts`
);

const imageExtensions = ["png", "jpg", "jpeg"];

function generateFiles(assetDir) {
  return fs
    .readdirSync(assetDir)
    .filter((file) =>
      imageExtensions.includes(file.split(".").pop().toLowerCase())
    );
}

function generateAssetsMap(files) {
  return files.reduce((acc, file) => {
    const key = path.basename(file, path.extname(file));
    acc[key] = ["./images", file].join("/");
    return acc;
  }, {});
}

const commonAssetsFiles = generateFiles(commonAssetsDir);
const commonAssetsMap = generateAssetsMap(commonAssetsFiles);
const appAssetsFiles = generateFiles(appAssetsDir);
const appAssetsMap = generateAssetsMap(appAssetsFiles);

const outputAppContent = `export const assets = {\n${Object.keys(appAssetsMap)
  .map((assetKey) => `  "${assetKey}": require("${appAssetsMap[assetKey]}")`)
  .join(",\n")}\n};`;

const outputCommonContent = `export const assets = {\n${Object.keys(
  commonAssetsMap
)
  .map((assetKey) => `  "${assetKey}": require("${commonAssetsMap[assetKey]}")`)
  .join(",\n")}\n};`;

fs.writeFileSync(outputAppFilePath, outputAppContent, "utf8");
fs.writeFileSync(outputCommonFilePath, outputCommonContent, "utf8");

console.log("✅ Fichier assetsMap.js généré !");
