const express = require("express");
const app = express();
PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("API") //the "home page"
});

let usuarios = [
	{ id: 1, nome: "Ana" },
	{ id: 2, nome: "Matheus" },
	{ id: 3, nome: "Lucas" },
	{ id: 4, nome: "Giovanni" },
	{ id: 5, nome: "Davi" },
	{ id: 6, nome: "Miguel" },
	{ id: 7, nome: "Pietra" },
	{ id: 8, nome: "Luiz" },
]; // a table with Ids and they'r names

app.get("/usuarios", (req, res) => {
	res.json(usuarios) //the "ususarios" page
});

app.post("/usuarios", (req, res) => {
	const novo = {
	id: usuarios.length + 1,
	nome: req.body.nome
	};
	usuarios.push(novo);
	res.status(201).json(novo);
}); //its to add another name to the table

app.put("/usuarios/:id", (req, res) => {
	const id = Number(req.params.id);
	const usuario = usuarios.find(u => u.id === id);

	if (!usuario) {
		return res.status(404).json({ erro: "Usuario nao encontrado" })
	};

	usuario.nome = req.body.nome;
	res.json(usuario);
}); //its to cheack if in the table there's a ID

app.delete("/usuarios/:id", (req, res) => {
	const id = Number(req.params.id);
	usuarios = usuarios.filter(u => u.id !== id);
	res.json({ mensagem: "Usuario removido com sucesso" })
}); //its to delete info in a corrent ID

app.listen(PORT, () => {
	console.log("ready")
}); //print "ready" and the API's ready to go
