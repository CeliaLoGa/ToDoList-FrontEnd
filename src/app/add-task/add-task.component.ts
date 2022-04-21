import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Task, TasksService } from '../Service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  // @ViewChild("add-new-task-form") formWrapper: ElementRef; // con esto accedemos al contenido de una plantilla de un componente

  public task: Task = {};

  public selectedButton: boolean = true;
  public addNewTaskButton: boolean = false; // inicializo el boton en no seleccionado

  constructor(private renderer: Renderer2, private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  public onCLickAddTask(addNewTaskButton: boolean): void {
    console.log('Add Task Clicado');
    this.addNewTaskButton = !(this.addNewTaskButton);
    console.log(this.addNewTaskButton);
    //this.renderer
  }

  public SubmitAddTaskForm(): void {
    console.log(this.task)
    this.tasksService.addTask(this.task).subscribe((createdTask: Task)=> {
      console.log(createdTask);
    }) // esto añade la nueva task haciendo la peticion de post "addTask"
  }

}
