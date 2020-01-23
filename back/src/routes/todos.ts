import * as express from 'express';
import * as models from '../../db/models';
const router = express.Router();

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const { Todo } = models;

router.get('/todos', async (req, res, next) => {
  const todos: Todo[] = await Todo.findAll({});
  res.json(todos);
});

router.delete('/todos/:id', async (req, res, next) => {
  const filter = {
    where: {
      id: req.params.id,
    },
  };
  const todo: Todo = await Todo.destroy(filter);
  res.json(todo);
});

export default router;
