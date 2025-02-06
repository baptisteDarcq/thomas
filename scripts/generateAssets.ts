const fs = require("fs");
const path = require("path");

const appNameDirectory = process.argv[2];

const commonAssetsDir = path.join(__dirname, "../assets");
const appAssetsDir = path.join(__dirname, `../apps/${appNameDirectory}/assets`);
const outputAppFilePath = path.join(
  __dirname,
  `../apps/${appNameDirectory}/assets/generated.ts`
);
const outputCommonFilePath = path.join(__dirname, `../assets/generated.ts`);

const extensions = ["ttf", "png", "svg"];

function generateFiles(distPath) {
  return fs
    .readdirSync(distPath)
    .filter(function (file) {
      return fs.statSync(distPath + "/" + file).isDirectory();
    })
    .reduce(function (all, subDir) {
      return [
        ...all,
        ...fs
          .readdirSync(distPath + "/" + subDir)
          .filter((file) =>
            extensions.includes(file.split(".").pop().toLowerCase())
          )
          .map((file) => subDir + "/" + file),
      ];
    }, []);
}

function generateAssetsMap(files) {
  return files.reduce((acc, file) => {
    const key = `${path.dirname(file)}/${path.basename(
      file,
      path.extname(file)
    )}`;
    acc[key] = [".", file].join("/");
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

console.log("✅ Fichier generated.ts généré !");
