import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  todo:string[] = [
    'Get to work',
    'Pick up groceries',
    'Go home',
  ]
  progress:string[] = [
    'Get up',
  ]
  done:string[] = [
    'Eat breakfast',
  ]
  newTask:string = ''

  constructor() { }

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  onSubmit(event: Event) {
    event.preventDefault()
    if(this.newTask === '') return
    
    this.todo.push(this.newTask)
    this.newTask = ''
  }
}
