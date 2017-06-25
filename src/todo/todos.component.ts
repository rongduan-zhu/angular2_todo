import { Component, OnInit } from '@angular/core';

import { TodoService } from '../services/todo.service';
import { Todo } from '../core/todo';
import { Operation, Action, Status } from '../core/operation';

import { KeyedCollection } from '../utils/keyedCollection';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  providers: [TodoService]
})
export class TodosComponent implements OnInit {
  todos: KeyedCollection<Todo> = new KeyedCollection<Todo>(todo => todo.id);

  constructor(private todoService: TodoService) { }

  ngOnInit() : void {
    this.todoService.getTodos().subscribe(
      (operation: Operation<Todo>) => this.todos.addOrUpdateItem(operation.data)
    );
  }

  addTodo(content: string) : void {
    this.todoService.addTodo(new Todo(content));
  }

  markComplete(todo: Todo) : void {
    this.todoService.changeStatus(todo, true);
  }
}
