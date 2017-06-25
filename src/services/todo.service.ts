import { Injectable } from '@angular/core';

import { Todo } from '../core/todo';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) : void {
    this.todos.push(todo);
  }

  markComplete(todo: Todo) : void {
    todo.completed = true;
  }

  markIncomplete(todo: Todo) : void {
    todo.completed = false;
  }
}
