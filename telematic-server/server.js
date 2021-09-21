const { Console } = require('console');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const data = require('./data.js');

const io = require('socket.io')(http, {
  cors: true,
});

io.on('connection', function (socket) {
  setTimeout(() => {
    const m = { ...data[0] };
    m.cumulativeOperatingHours.hour = 2;
    m.cumulativeIdleHours.hour = 1;
    io.emit('machineUpdater', [m]);
  }, 5000);

  setTimeout(() => {
    const m = { ...data[1] };
    m.id = 2;
    m.fuelRemaining.percent = 2;
    io.emit('machineUpdater', [m]);
  }, 10000);

  setTimeout(() => {
    const m = { ...data[2] };
    m.id = 3;
    m.cumulativeIdleHours.hour = 1;
    io.emit('machineUpdater', [m]);
  }, 15000);

  setTimeout(() => {
    const m = { ...data[3] };
    m.id = 4;
    m.engineStatus.running = false;
    io.emit('machineUpdater', [m]);
  }, 20000);
});

app.get('/', (req, res) => {
  res.send('Telematic server');
});

http.listen(5000, function () {
  console.log('listening on *:5000');
});
