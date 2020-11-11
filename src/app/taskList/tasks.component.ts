import { Component, OnInit } from '@angular/core';
import { ɵInternalFormsSharedModule } from '@angular/forms';

import { ITasks } from './tasks';
// Import TasksService
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  // Register TasksService in this component by
  // declaring it in the providers array
  providers: [TasksService]
})

export class TasksComponent implements OnInit {
  private tasksList: ITasks[]=[];
  currentTask = null;
  currentIndex = -1;
  title = '';

  selectedTasksCountRadioButton: string = 'All';

  // Inject TasksService using the constructor
    // The private variable _tasksService which points to
    // TasksService singelton instance is then available
    // throughout this class
    constructor(private _tasksService: TasksService) {
    }

  // In ngOnInit() life cycle hook call the getTasks()
    // service method of TasksService using the private
    // variable _tasksService
    ngOnInit() {
      // this.tasksList = this._tasksService.getAllTasks();
      this._tasksService.getAllTasks()
        .subscribe(
          tasksData => {this.tasksList = tasksData;},
          error=>{console.log(error);}
          );
  }


  getTotalTasksCount(): number {
    return this.tasksList.length;
}

  getTotalFollowUpTasksCount(): number {
    return this.tasksList
        .filter(e => e.taskType === 'Follow-up').length;
  }

  onTasksCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedTasksCountRadioButton = selectedRadioButtonValue;
}

}
