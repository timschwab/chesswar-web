// Libraries
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// Constants
const dir = __dirname;
const port = 64355;

// Serve up the files I guess
io.on('connection', (socket) => {
	console.log('A user connected');
	socket.on('message', (msg) => {
		console.log('message: ' + msg);
	});
});

app.get('/', (req, res) => {
	res.sendFile(dir + '/src/index.html');
});

app.get('/main.js', (req, res) => {
	res.sendFile(dir + '/src/main.js');
});

server.listen(port, () => console.log('Site running on ' + port));
