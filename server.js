'use strict';

const express = require('express');
const server = express();

const PORT = process.env.PORT || 3000;

server.use(express.static('./public'));

server.get('/test', (req, res) =>{
  res.send('works!');
});

server.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`);
})