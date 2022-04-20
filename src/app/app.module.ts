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

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // tambien he añadido esto
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
