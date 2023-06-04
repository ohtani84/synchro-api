"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const config_1 = __importDefault(require("config"));
const socket_1 = __importDefault(require("./socket"));
const port = config_1.default.get('port');
const host = config_1.default.get('host');
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*',
    },
});
httpServer.listen(port, host, () => {
    console.log(`http://${host}:${port} deploy`);
    (0, socket_1.default)({ io });
});
app.get('/ping', (_, res) => {
    console.log('ping success');
    res.status(200).send('ping success');
});
//# sourceMappingURL=index.js.map