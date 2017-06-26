import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { TodoService } from '../services/todo.service';
import { Todo } from '../core/todo';
import { Operation, Action, Status } from '../core/operation';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {
  todos: Observable<Todo[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit() : void {
    this.todos = this
      .todoService
      .getTodos()
      .map((operation: Operation<Todo[]>) => operation.data);
  }

  addTodo(content: string) : void {
    this.todoService.addTodo(new Todo(content));
  }

  changeStatus(todo: Todo, newStatus: boolean) : void {
    this.todoService.changeStatus(todo, newStatus);
  }
}
