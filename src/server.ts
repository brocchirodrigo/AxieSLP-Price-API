import 'dotenv/config';

import cors from 'cors';
import express from 'express';

import routes from './modules/routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Server running in port ${process.env.PORT}!`);
});
