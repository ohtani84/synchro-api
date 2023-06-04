"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const socket_io_1 = require("socket.io");
const http_1 = require("http");
const socket_1 = require("./socket");
const express = require('express');
const app = express();
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*',
    },
});
app.get('/', (_, res) => {
    (0, socket_1.default)({ io });
});
app.get('/ping', (_, res) => {
    console.log('ping success');
    res.status(200).send('ping success');
});
exports.api = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map