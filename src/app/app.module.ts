import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component'; // importa los componentes de las Tasks

import { FormsModule } from '@angular/forms';
import { TasksService } from './Service';
import { TaskDetailComponent } from './task-detail/task-detail.component'; // <-- NgModel lives here
import { HttpClient } from '@angular/common/http';
import { AddTaskComponent } from './add-task/add-task.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DeleteTaskComponent } from './delete-task/delete-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailComponent,
    AddTaskComponent,
    DeleteTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
