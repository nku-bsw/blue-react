// Fügt Beispiel-Code der Doku hinzu

const fs = require("fs");

const packageName = require("./package.json").name;
const docPath = "./src/docs/data/docs.json";

let doc = require(docPath);

Object.keys(doc).forEach(prop => {
    const displayName = doc[prop].displayName;
    const exampleFilePath = "./src/docs/examples/" + displayName + ".js";
    const exampleFileTsxPath = "./src/docs/examples/" + displayName + ".tsx";
    let exampleCode = null;

    if (fs.existsSync(exampleFileTsxPath)) {
        exampleCode = fs.readFileSync(exampleFileTsxPath, "utf8");
    }
    else if (fs.existsSync(exampleFilePath)) {
        exampleCode = fs.readFileSync(exampleFilePath, "utf8");
    }

    if (exampleCode !== null) {
        doc[prop].exampleCode = exampleCode.replace('"../../../index.js"', `"${packageName}"`);
    }
});

fs.writeFileSync(docPath, JSON.stringify(doc));