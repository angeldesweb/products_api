import { app } from './app';
import 'dotenv/config';

const port = process.env.PORT || 3001;

app
	.listen(port, () => console.log(`Server running at port: ${port}`))
	.on('error', (err: Error) => console.log(`Server failed with ERROR: ${err}`));
