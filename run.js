// Libraries
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// Constants
const dir = __dirname;
const port = 8001;

// Serve up the files I guess
app.get('/', (req, res) => {
	res.sendFile(dir + '/src/index.html');
});

app.get('/main.js', (req, res) => {
	res.sendFile(dir + '/src/main.js');
});

server.listen(port, () => console.log('Site running on ' + port));
