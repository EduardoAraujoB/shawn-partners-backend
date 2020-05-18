import './bootstrap';
import express from 'express';
import cors from 'cors';

import routes from './routes';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  public middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  public routes(): void {
    this.express.use('/api', routes);
  }
}

export default new App().express;
