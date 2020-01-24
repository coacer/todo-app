import * as express from 'express';
import indexRouter from './routes';
import todosRouter from './routes/todos';
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', indexRouter);
app.use('/api/v1', todosRouter);

app.listen(port, () => console.log('Running server...'));
