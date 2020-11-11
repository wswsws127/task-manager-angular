import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

import { TasksService } from '../taskList/tasks.service';
import { ITasks } from '../taskList/tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  private task= {
    quoteType: 'string',
    contactID: 'string',
    taskDescription: 'string',
    taskDueDate: 'string',
    taskType: 'string'
  };
  submitted = false;


  constructor(private _tasksService: TasksService) { }

  ngOnInit(): void {

  }

  saveTask(): void {
    const _data = {
      _quoteType: this.task.quoteType,
      _contactID: this.task.contactID,
      _taskDescription: this.task.taskDescription,
      _taskDueDate: this.task.taskDueDate,
      _taskType: this.task.taskType,

    };

    this._tasksService.createTask(_data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
    newTask(): void {
      this.submitted = false;
      this.task = {
        quoteType: 'string',
        contactID: 'string',
        taskDescription: 'string',
        taskDueDate: 'string',
        taskType: 'string'
      };
  }

}
