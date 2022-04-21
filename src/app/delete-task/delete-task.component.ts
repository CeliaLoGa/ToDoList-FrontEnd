import { Component, OnInit, Renderer2 } from '@angular/core';
import { Task, TasksService } from '../Service';
import { TaskByIdService } from '../Service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})

export class DeleteTaskComponent implements OnInit {

  public task: Task = {};

  public selectedButton: boolean = true;
  public deleteTaskButton: boolean = false; // inicializo el boton en no seleccionado

  constructor(private renderer: Renderer2, private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  public onCLickDeleteTask(addNewTaskButton: boolean): void {
    console.log('Delete Task Clicado');
    this.deleteTaskButton = !(this.deleteTaskButton);
    console.log(this.deleteTaskButton);
    //this.renderer
  }

  public SubmitDeleteTaskForm(): void {
    console.log(this.task.id);
    //this.taskByIdService.deleteTaskById(1);
  }

}

