import cors from 'cors';
import express, { Express } from 'express';
import 'express-async-errors';
import 'reflect-metadata';

import { connectDb, disconnectDB, loadEnv } from '@/config';

import { categoriesRouter } from '@/routers';

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/categories', categoriesRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
