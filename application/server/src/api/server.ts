import { Routes } from 'api/routes';
import dotenv from 'dotenv';
import express, { Router } from 'express';
import http from 'http';
import connectionDatabase from 'infra/data/connection.database';
import loadModules from 'utils/load-modules.utils';

dotenv.config();
const PORT = process.env.PORT || 3000;

export class Server {
  private express = express();
  private routes: Router;

  constructor() {
    this.routes = new Routes().router;
    this.initialize();
  }

  initialize() {
    connectionDatabase();
    loadModules(this.express);

    this.express.use(this.routes);

    const server = http.createServer(this.express);
    server.listen(PORT, () =>
      // tslint:disable-next-line:no-console
      console.log(`server started on port ${PORT} (${process.env.NODE_ENV})`),
    );
  }
}
