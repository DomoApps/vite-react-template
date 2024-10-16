import express from 'express';
import ViteExpress from 'vite-express';
import getPort from 'get-port';
import setupProxy from './setupProxy.js';

const app = express();
const port = await getPort({ port: [3000, 3001, 3002] });
app.use(setupProxy);

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on port ${port}...`),
);
