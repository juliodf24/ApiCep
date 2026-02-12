
// require('dotenv').config();

import express from 'express';
import { router } from './rotas';

const app = express();

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Methods', 'GET'); 
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});


app.use(express.json());

app.use(router);


export { app };
