const fs = require("fs");
const path = require("path");

// Criar uma pasta em um diretorio
fs.mkdir(path.join(__dirname, "new-folder"), (error) => {
    console.log(error);
});

// Criar um arquivo nesta pasta
fs.writeFile(path.join(__dirname, "new-folder", "new-file.txt"), "Welcome do FSC!", (error) => {
    console.log(error);
})

// Adicionar algo dentro do arquivo
fs.appendFile(path.join(__dirname, "new-folder", "new-file.txt"), "\nHello World", (error) => {
    console.log(error);
})

// Ler um arquivo
fs.readFile(path.join(__dirname, "new-folder", "new-file.txt"), "utf-8", (error, data) => {
    console.log(data);
})