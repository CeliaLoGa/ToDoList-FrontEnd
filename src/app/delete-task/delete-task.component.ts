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

  public param: number = 0;

  public selectedButton: boolean = true;
  public deleteTaskButton: boolean = false; // inicializo el boton en no seleccionado;

  constructor(private renderer: Renderer2, private taskByIdService: TaskByIdService, private tasksService: TasksService) { };

  ngOnInit(): void {
  }

  public onCLickDeleteTask(deleteTaskButton: boolean): void {
    console.log('Delete Task Clicado');
    this.deleteTaskButton = !(this.deleteTaskButton);
    console.log(this.deleteTaskButton);
  }

  public SubmitDeleteTaskForm(param: number): void {
    //console.log(this.task.id);
    this.taskByIdService.deleteTaskById(param).subscribe((deletedTask: Task)=> {
      console.log(deletedTask);
    });
    window.location.reload();
  }

  public SubmitDeleteAllTask(): void {
    //console.log(this.task.id);
    this.tasksService.deleteTask;
    //window.location.reload();
  }

}

