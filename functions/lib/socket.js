"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket = ({ io }) => {
    io.on('connection', (socket) => {
        // クライアントから「sendDataFromClient」イベントを受信
        socket.on('sendDataFromClient', (position) => {
            // 接続済みのクライアントにposition送信
            io.emit('sendDataFromServer', position);
        });
    });
};
exports.default = socket;
//# sourceMappingURL=socket.js.map