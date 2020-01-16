import * as express from 'express';
const router = express.Router();

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

router.get('/todos', (req, res, next) => {
  const todos: Todo[] = [
    {
      id: 1,
      title: 'Expressでバックエンドを実装する',
      completed: false,
    },
    {
      id: 2,
      title: '卒論資料の作成',
      completed: false,
    },
    {
      id: 3,
      title: 'お酒を飲みまくる',
      completed: false,
    },
    {
      id: 4,
      title: '筋トレをする',
      completed: false,
    },
  ];

  res.json(todos);
});

export default router;
