import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import config from 'config';
import socket from './socket';

const port = config.get<number>('port');
const host = config.get<string>('host');

const app = express();
const httpServer = createServer(app);
// const io = new Server(httpServer, {
//   cors: {
//     origin: corsOrigin,
//     credentials: true,
//   },
// }
// );

const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

httpServer.listen(port, host, () => {
  console.log(`http://${host}:${port}`);
  socket({ io });
});

app.get('/ping', (_: any, res: any) => {
  console.log('ping success');
  res.status(200).send('ping success');
});
