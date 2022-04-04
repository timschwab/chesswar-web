// Libraries
const path = require('path');
const express = require('express');
const app = express();

// Constants
const dir = __dirname;
const port = 64355;

// Serve up the files I guess
app.use(express.static(path.join(dir, 'src')));

app.listen(port, () => console.log('Site running on ' + port));
