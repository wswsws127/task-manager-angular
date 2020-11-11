import { Component, OnInit } from '@angular/core';
import { TasksService } from '../taskList/tasks.service';
import { ITasks } from '../taskList/tasks';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  currentTask = null;
  message = '';

  constructor(private _tasksService: TasksService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTask(this.route.snapshot.paramMap.get('id'));
  }

  getTask(id): void {
    this._tasksService.getTaskById(id)
      .subscribe(
        data => {
          this.currentTask = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      _quoteID: this.currentTask.QuoteID,
      _quoteType: this.currentTask.QuoteType,
      _taskDescription: this.currentTask.TaskDescription
    };

    this._tasksService.updateTask(this.currentTask.QuoteID, data)
      .subscribe(
        response => {
          this.currentTask.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  
  updateTask(): void {
    this._tasksService.updateTask(this.currentTask.QuoteID, this.currentTask)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The task was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTask(): void {
    this._tasksService.delete(this.currentTask.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tasks']);
        },
        error => {
          console.log(error);
        });
  }
}
