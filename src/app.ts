import express, { Application, Router, Request, Response, NextFunction } from 'express';
import { config } from 'dotenv';
import { connect, connection } from 'mongoose';
import cors from 'cors';
import todoController from './api/todo/todo-controller';

config();

const app: Application = express();
const router: Router = express.Router();

// Database
connect(process.env.DB_CONNECTION_STRING!, { useNewUrlParser: true, useUnifiedTopology: true });

connection.on('connected', () => {
  console.log(`Connected to database: ${process.env.DB_CONNECTION_STRING}`);
});

connection.on('error', (err) => {
  console.log(`Database error: ${err}`);
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api', router);
router.use('/todo', todoController);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Todo API');
});

// Start server
app.listen(process.env.API_PORT, () => {
  console.log(`Server running at: http://localhost:${process.env.API_PORT}/api`);
});
