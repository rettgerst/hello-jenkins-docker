const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('hello world!')
});

const port = process.env.SERVER_PORT || 8080;

app.listen(port, () => console.log('listening on', port));