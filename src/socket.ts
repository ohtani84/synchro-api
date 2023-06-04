import { Server, Socket } from 'socket.io';

const socket = ({ io }: { io: Server }) => {
  io.on('connection', (socket: Socket) => {
    // クライアントから「sendDataFromClient」イベントを受信
    socket.on('sendDataFromClient', (position) => {
      // 接続済みのクライアントにposition送信
      io.emit('sendDataFromServer', position);
    });
  });
};

export default socket;
