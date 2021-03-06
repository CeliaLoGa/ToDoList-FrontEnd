import { Injectable } from '@angular/core';

import { Task } from './task';
import { TASKS } from './tasks-list';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTasks(): Task[] {
    return TASKS;
  }

  constructor() { }
}
