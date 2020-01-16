import * as express from 'express';
import * as models from '../../db/models';
const router = express.Router();

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

router.get('/todos', async (req, res, next) => {
  const todos: Todo[] = await models.Todo.findAll({});
  res.json(todos);
});

export default router;
