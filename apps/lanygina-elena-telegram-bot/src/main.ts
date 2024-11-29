import express from 'express';

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || 'localhost';
const BACKEND_HOST = process.env?.['LE_BACKEND_URL'] || 'http://localhost:4000';
export const BACKEND_URL = `${BACKEND_HOST}/api`;

const FRONTEND_URL = process.env?.['LE_FRONTEND_URL'] || 'http://localhost:4200';
const DATABASE_URL = process.env?.['LE_DATABASE_URL'] || 'postgresql://lanyginaelena_db_user:VGCcilLsXvWip2z2Vxp4jadxPwbqYGie@dpg-ct4bfsl6l47c73f8co6g-a.frankfurt-postgres.render.com/lanyginaelena_db';

console.log(`PORT:`, PORT);
console.log(`HOST:`, HOST);
console.log(`FRONTEND_URL:`, FRONTEND_URL);
console.log(`DATABASE_URL:`, DATABASE_URL);

const app = express();

app.get('/', (req, res) => {
  res.send({ message: `Hello from Telegram bot!` });
});

app.listen(PORT, HOST, () => {
  console.log(`[ ready ] http://${HOST}:${PORT}`);
});
