import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule }      from '@angular/core';

import { AppComponent }  from './app.component';
import { TodosComponent } from '../todo/todos.component';

import { TodoService } from '../services/todo.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TodosComponent
  ],
  providers: [
    TodoService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
