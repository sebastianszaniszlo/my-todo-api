import { Schema, Model, Document, model } from 'mongoose';

export interface TodoItem extends Document {
  name: string;
  dueDate: string;
  isCompleted: boolean;
}

const todoItemSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: false,
  }
});

export const TodoItemMongoModel: Model<TodoItem> = model('TodoItem', todoItemSchema);