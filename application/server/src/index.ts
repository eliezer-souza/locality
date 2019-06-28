import 'reflect-metadata';

import { Server } from 'api/server';
import { registeringDependencies } from 'infra/cross-cutting/ioc';

registeringDependencies()
  .then(() => new Server())
  .catch(err => console.error(err));
