# Maratona discover - Rocketseat

## Aula 01

Códigos para lembrar nos próximos projetos.

```js
router.get("/index.html", (req, res) => {
    res.redirect("/"); // Redireciona o get ao endereço host/
})

// Setando uma configuração
server.set("view engine", "ejs"); 
```

DICAS :
Quando for utilizar caminhos absolutos em routes, deve-se trocar esses caminhos também nos arquivos estáticos,
evitando sempre utilizar caminhos relativos.

TEMPLATE ENGINE:
Nessa aula foi ensinado a utilizar o template engine "ejs", em que é possível adicionar JS no HTML.
Para utilizar esse template é necessário mudar as extenões do HTML para EJS.
Para usar esse template no nodejs deve-se utilizar a função .render();