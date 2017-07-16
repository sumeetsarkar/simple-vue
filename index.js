const express = require('express');
const path = require('path');
const app = new express();

// serve index page
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './src/index.html')));

// start server
app.listen(4000, () => {
  console.log('server started...');
});
