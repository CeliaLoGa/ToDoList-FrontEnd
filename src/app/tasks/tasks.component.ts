import { Component, OnInit } from '@angular/core';
import { TasksService } from '../Service';
import { Task } from '../Service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks: Task[]=[];

  constructor(private tasksService:TasksService) { }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((data)=>{
      console.log(data);
      this.tasks = data;
    })
  }

  selectedTask?: Task;
  onSelect(task:Task): void{
    this.selectedTask = task;
  }

}

/*
export class AddNewTask implements OnInit {

  tasks = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

  addTask?: Task;
  onSelect(newtask:Task): void{
    this.addTask = newtask;
  }

}
*/
