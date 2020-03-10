import { TodoItem, TodoItemMongoModel } from '../../models/todo-item';

class TodoItemRetriever {
  public retrieveAsync(): Promise<Array<TodoItem>> {
    return TodoItemMongoModel.find().exec();
  }
}

export default new TodoItemRetriever();