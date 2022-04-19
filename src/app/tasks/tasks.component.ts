import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TASKS } from '../tasks-list';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  task: Task = {
    id: 1,
    description: "cosas que hacer",
    status: "pendiente"
  }

  tasks = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

  selectedTask?: Task;
  onSelect(task:Task): void{
    this.selectedTask = task;
  }

}
