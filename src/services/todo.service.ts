import { Injectable } from '@angular/core';

import { Todo } from '../core/todo';

@Injectable()
export class TodoService {
  private todos: Todo[];

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) : void {
    this.todos.push(todo);
  }

  markComplete(index: number) : void {
    this.todos[index].completed = true;
  }

  reactivate(index: number) : void {
    this.todos[index].completed = false;
  }
}
