const express = require('express');
const path = require('path');
const app = new express();

const NODE_PORT = 4000;

// serve index page
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './index.html')));

// start server
app.listen(NODE_PORT, () => {
  console.log(`server started... open http://localhost:${NODE_PORT}`);
});
