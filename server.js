// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser'); // Add body-parser

app.use(cors());

app.use(express.static('public'));
app.use(bodyParser.json()); // Use body-parser to parse JSON requests

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.post('/send-update', (req, res) => {
  const message = req.body.message;
  io.emit('update', { message });
  res.sendStatus(200);
});

const port = process.env.PORT || 3000;
const lanIP = '0.0.0.0'; 
app.listen(port, lanIP, () => {
  console.log(`Server is running on port ${lanIP}:${port}`);
});
