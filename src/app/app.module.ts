import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule }      from '@angular/core';

import { AppComponent }  from './app.component';
import { TodosComponent } from '../todo/todos.component';

import { TodoService } from '../services/todo.service';

import { TodoPipe } from '../utils/todo.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TodosComponent,
    TodoPipe
  ],
  providers: [
    TodoService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
