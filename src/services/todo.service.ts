import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Todo } from '../core/todo';
import { Operation, Action, Status } from '../core/operation';

@Injectable()
export class TodoService {
  private todosSubject = new Subject<Operation<Todo>>();

  getTodos(): Observable<Operation<Todo>> {
    return this.todosSubject.asObservable();
  }

  addTodo(todo: Todo) : void {
    this.todosSubject.next(new Operation<Todo>(todo, Action.Created, Status.Succeeded));
  }

  changeStatus(todo: Todo, completed: boolean) : void {
    todo.completed = completed;

    this.todosSubject.next(new Operation<Todo>(todo, Action.Updated, Status.Succeeded));
  }
}
