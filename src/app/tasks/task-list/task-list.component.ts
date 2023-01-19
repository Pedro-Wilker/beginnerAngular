import { TaskService } from './../shared/task.service';
import { Component, Input, OnInit } from '@angular/core';
import {Task} from '../shared/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  /* INJEÇÃO DE DEPENDENCIA
  Link: https://angular.io/guide/dependency-injection
  */

  tasks: Task[] = [];

  @Input()
  task : Task | undefined;

  constructor(private taskService: TaskService){

  }

  ngOnInit() {
    this.tasks = this.taskService.getAll();
  }

  remove(task: Task){
    this.taskService.delete(task.id);
  }
  onCompletedCheckChange(task : Task){
    this.taskService.save(task);
  }
}
