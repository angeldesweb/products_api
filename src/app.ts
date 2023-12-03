import type { Application } from 'express';
import express, { json, urlencoded } from 'express';
import swui from 'swagger-ui-express';
import cors from 'cors';
import { api } from './routes';
import { ErrorMiddleware } from './middlewares/ErrorMiddleware';

export const app: Application = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/api', api);
app.use(
	'/docs',
	swui.serve,
	swui.setup(undefined, {
		swaggerOptions: {
			url: '/swagger.json',
		},
	})
);

app.get('/', (req, res) => res.redirect('/docs'));

app.use(ErrorMiddleware);
