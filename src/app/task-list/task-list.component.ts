import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  // Arreglo para almacenar las tareas
  tasks: string[] = [];

  // Variable para almacenar la nueva tarea
  newTask: string = '';
  // Método para agregar una nueva tarea

  addTask() {
    // Verifica si hay texto en el campo de entrada
    if (this.newTask.trim()) {
      // Agrega la nueva tarea al arreglo
      this.tasks.push(this.newTask.trim());
      // Limpia el campo de entrada
      this.newTask = '';
    }
  }

  // Método para eliminar una tarea
  removeTask(index: number) {
    // Elimina la tarea del arreglo usando el índice
    this.tasks.splice(index, 1);
  }

  constructor() {
    this.tasks = [];
  }

  ngOnInit(): void {}
}
