import { Component, OnInit } from '@angular/core';

import { TodoService } from '../services/todo.service';
import { Todo } from '../core/todo';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  providers: [TodoService]
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() : void {
    this.getTodos();
  }

  getTodos() : void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(content: string) : void {
    let todo = new Todo(content);
    this.todoService.addTodo(todo);
    this.getTodos();
  }

  markComplete(todo: Todo) : void {
    this.todoService.markComplete(todo);
  }
}
