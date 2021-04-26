// NodeJs como um servidor de arquivos
/**
 * Para incluir o módulo File System basta usar um require()
 * 
 * Uso comum para o módulo File System: 
 *  Ler arquivos
 *  Criar arquivos
 *  Atualizar arquivos
 *  Deletar arquivos
 *  Renomear arquivos
 * 
 */
const fs = require("fs")
const http = require("http")

/**
 * Para ler arquivos, basta usar o seguinte método:
 *  readFile()
 *Basicamente o readFile() serve para mostrar o conteúdo do arquivo
 por um servidor, é possível utilizar o nodejs para criar um 
 servidor de arquivos estáticos, por exemplo pdf. Um exemplo é utilizado logo abaixo

 */
http.createServer((req, res) => {
    fs.readFile('./books/fil.pdf', (err, data) => {

        //Tipo de conteúdo deve ser application/pdf, pois cada cliente possui uma forma de ler o pdf 
        // e utilizar essa API de cada cliente ajuda bastante.

        /* Aqui o servidor seta os headers de resposta, nesse header é setado o tipo de arquivo que está
        * sendo enviado ao cliente
        */
        res.writeHead(200, { "Content-type": "application/pdf" })

        // Aqui o servidor envia o arquivo
        res.write(data);

        // Aqui o servidor enviar que terminou a resposta. Concluindo a requisição.
        return res.end();
    })
}).listen(3333) // Porta que o servidor está escutando as requisições 

// Portanto, para servir arquivos para o servidor, basta usar esse método.


/**
 *  Criar arquivos
 *  
 *  O método FileSystem possui alguns métodos para criar novos arquivos
 * 
 *  fs.appendFile()
 *  fs.open()
 *  fs.writeFile()
 * 
 */

const conteudo = "\nIsso significa que o node primeiro transforma a string em bits e depois adiciona no arquivo\n"

/**
 *  appendFile() -> Recebe um arquivo, depois um conteúdo a ser adicionado nesse arquivo em string.
 *  e por último um callbak de erro, geralmente utilizado para informa se deu tudo certo na gravação ou não.
 * 
 */
fs.appendFile("file.txt", conteudo, (err) => {
    if (err) throw err;
    console.log("saved!")
})

/**
 *  fs.writeFile() -> Substitui o arquivo e coloca o conteúdo no mesmo, caso tenha é claro, se não tiver
 *  cria um novo e coloca o conteúdo dentro.
 *
 */
fs.writeFile("file1.txt", "Conteudo", (err) => {
    if (err) throw err;
    console.log("Arquivado.")
})

// DELETAR ARQUIVOS

/**
 * fs.unlink() -> Exclui um arquivo específico.
 */
fs.unlink("file.txt", (err) => {
    if (err) throw err;
    console.log("Deletado")
})

// RENOMEAR ARQUIVOS

/**
 * fs.rename() -> Renomeia um arquivo para outro arquivo.
 */
fs.rename("file.txt", "fileRenomeado.txt", (err) => {
    if (err) throw err;
    console.log("Arquivo renomeado")
})