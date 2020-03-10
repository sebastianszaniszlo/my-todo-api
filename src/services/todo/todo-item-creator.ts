import { TodoItem } from '../../models/todo-item';

class TodoItemCreator {
  public createAsync(item: TodoItem): Promise<TodoItem> {
    return item.save();
  }
}

export default new TodoItemCreator();