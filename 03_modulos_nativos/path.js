const path = require("path");
const fs = require("fs");

console.log("Nome do arquivo: ", path.basename(__filename));


console.log(__filename);
console.log(__dirname);

fs.writeFile(path.join(__dirname, "message.txt"), "Welcome to FSC!", () => {});