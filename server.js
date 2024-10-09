import express from 'express';
import ViteExpress from 'vite-express';
import setupProxy from './setupProxy.js';

const app = express();

app.use(setupProxy);

ViteExpress.listen(app, 3000, () => console.log('Server is listening...'));
