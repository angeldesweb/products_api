import type { Application } from 'express';
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { api } from './routes';
import { ErrorMiddleware } from './middlewares/ErrorMiddleware';

export const app: Application = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/api', api);

app.use(ErrorMiddleware);
