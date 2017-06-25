import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from '../core/todo';

@Pipe({
  name: 'todoFilter',
  pure: false
})
export class TodoPipe implements PipeTransform {
  transform(todos: Todo[], completed: boolean): Todo[] {
    return todos.filter(todo => todo.completed == completed);
  }
}
