import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule }      from '@angular/core';

import { AppComponent }  from './app.component';
import { TodosComponent } from '../todo/todos.component';
import { NotificationComponent } from '../notification/notification.component';

import { TodoService } from '../services/todo.service';
import { NotificationService } from '../services/notification.service';

import { TodoPipe } from '../utils/todo.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TodosComponent,
    NotificationComponent,
    TodoPipe
  ],
  providers: [
    TodoService,
    NotificationService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
