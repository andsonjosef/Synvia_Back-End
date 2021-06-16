import express from 'express';
import routes from './routes'
const app = express();

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});



app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.listen(process.env.PORT || 3000);

export default app;