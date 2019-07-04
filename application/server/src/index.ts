import 'reflect-metadata';

import { Server } from 'api/server';
import { registeringDependencies } from 'infra/cross-cutting/ioc';

registeringDependencies()
  .then(() => new Server())
  // tslint:disable-next-line:no-console
  .catch(err => console.error(err));
