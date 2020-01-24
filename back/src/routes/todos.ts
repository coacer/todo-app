import * as express from 'express';
import * as models from '../../db/models';
const router = express.Router();

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const { Todo } = models;

router.get('/todos', async (req, res) => {
  try {
    const todos: Todo[] = await Todo.findAll({});
    res.json(todos);
  } catch (e) {
    console.log(e.message);
  }
});

router.post('/todos', async (req, res) => {
  try {
    const data = await Todo.create({
      title: req.body.title,
      completed: false,
    });
    res.json(data);
  } catch (e) {
    console.log(e.message);
  }
});

router.delete('/todos/:id', async (req, res) => {
  const filter = {
    where: {
      id: req.params.id,
    },
  };
  const todo: Todo = await Todo.destroy(filter);
  res.json(todo);
});

export default router;
