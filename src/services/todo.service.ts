import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Todo } from '../core/todo';
import { Notification } from '../core/notification';
import { Operation, Action, Status } from '../core/operation';
import { NotificationService } from './notification.service';
import { KeyedCollection } from '../utils/keyedCollection';

@Injectable()
export class TodoService {
  private todosSubject = new Subject<Operation<Todo[]>>();

  todos: KeyedCollection<Todo> = new KeyedCollection<Todo>(todo => todo.id);

  constructor(notification: NotificationService) {
    this.todosSubject
      .map((operation: Operation<Todo[]>) => [new Notification(
          operation.operation,
          `Successfully ${Action[operation.operation]} a Todo`
      )])
      .subscribe(notification.notificationSubject);
  }

  getTodos(): Observable<Operation<Todo[]>> {
    return this.todosSubject.asObservable();
  }

  addTodo(todo: Todo) : void {
    this.todos.addOrUpdateItem(todo);

    this.todosSubject.next(
      new Operation<Todo[]>(this.todos.toArray(), Action.Created, Status.Succeeded));
  }

  changeStatus(todo: Todo, completed: boolean) : void {
    todo.completed = completed;

    this.todosSubject.next(
      new Operation<Todo[]>(this.todos.toArray(), Action.Updated, Status.Succeeded));
  }
}
