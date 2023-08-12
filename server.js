const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const users = {}; // 用來儲存使用者資訊的物件

// 處理靜態檔案（HTML、CSS、JS）
app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  socket.on('join', (username) => {
    users[socket.id] = { username };
    io.emit('user connected', Object.values(users).map((user) => user.username));

socket.on('file upload', (fileData) => {
  const user = users[socket.id];
  // 廣播給所有用戶，包括發送者
  io.emit('file uploaded', { username: user.username, file: fileData });
});


  });

  // 接收使用者發送的訊息
  socket.on('chat message', (msg) => {
    const user = users[socket.id];
    io.emit('chat message', { username: user.username, message: msg });
  });

  // 斷開連接處理
  socket.on('disconnect', () => {
    const user = users[socket.id];
    if (user) {
      delete users[socket.id];
      io.emit('user connected', Object.values(users).map((user) => user.username));
    }
  });
});

const port = 3000;
http.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});