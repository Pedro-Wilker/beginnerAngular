import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [
    {id: 1, description: "Tarefa 1", completed: true},
    {id: 2, description: "Tarefa 2", completed: false},
    {id: 3, description: "Tarefa 3", completed: true},
    {id: 4, description: "Tarefa 4", completed: false},
    {id: 5, description: "Tarefa 5", completed: false},
    {id: 6, description: "Tarefa 6", completed: false},
    {id: 7, description: "Tarefa 7", completed: false},
    {id: 8, description: "Tarefa 8", completed: false},
    {id: 9, description: "Tarefa 9", completed: false},
    {id: 10, description: "Tarefa 10", completed: false},
    {id: 11, description: "Tarefa 11", completed: false},
  ]



  constructor() { }

  getAll(){
    const list =  window.localStorage.getItem('lista-tarefas');
    if(list){
      this.tasks = JSON.parse(list);
    }
    return this.tasks;
  }

  getById(id:number){
    const task = this.tasks.find((value) => value.id == id );
    return task;
  }

  save(task: Task ){
    if(task.id){
      const taskArr = this.getById(task.id) ;
      taskArr.description = task.description;
      taskArr.completed = task.completed;
    } else {
      let lastId=0;
      if(this.tasks.length>0){
        lastId = this.tasks[this.tasks.length-1].id;
      }
      task.id = lastId + 1;
      task.completed = false;
      this.tasks.push(task);
        }
    window.localStorage.setItem('lista-tarefas', JSON.stringify(this.tasks));
  }

  delete(id: number){
    const taskIndex = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(taskIndex, 1);
    window.localStorage.setItem('lista-tarefas', JSON.stringify(this.tasks));
  }
}

