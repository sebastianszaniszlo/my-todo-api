import express, { Router, Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import todoItemRetriever from '../../services/todo/todo-item-retriever';
import { TodoItemMongoModel } from '../../models/todo-item';
import todoItemCreator from '../../services/todo/todo-item-creator';

const router: Router = express.Router();

router.get('/', asyncHandler(async(req: Request, res: Response, next: NextFunction) => {
  const result = await todoItemRetriever.retrieveAsync();

  res.json(result);
}));

router.post('/', asyncHandler(async(req: Request, res: Response, next: NextFunction) => {
  const item = new TodoItemMongoModel(req.body);

  await todoItemCreator.createAsync(item);

  res.status(201).json(item);
}));
export default router;