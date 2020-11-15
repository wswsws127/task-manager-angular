import { Component, OnInit,Input,Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,  FormBuilder,  Validators,FormControl } from '@angular/forms';

import {MatCalendar} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from '@angular/material/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';

import { TasksService } from '../taskList/tasks.service';
import { ITasks } from '../taskList/tasks';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  angForm: FormGroup;

  @Input() taskInfo :any;
  currentTask :any;
  currentIndex = 0;
  private task= {
    quoteType: 'string',
    contactID: 'string',
    taskDescription: 'string',
    taskDueDate: 'string',
    taskType: 'string'
  };

  constructor(private _tasksService: TasksService,public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder)
   { 
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      quoteType :new FormControl(''),
      taskType:new FormControl(''),
      contactID:new FormControl(''),
      taskDueDate: new FormControl(''),
      taskDescription: new FormControl(''),
    });
  }
 
  submitted = false;

  ngOnInit(): void {
    this.currentTask = this.data;
    this.currentIndex=this.data.QuoteID;
  }

  closeModal() {
    this.dialogRef.close();
  }

//   saveTaskUpdate(): void {
    
//     const _data = {
      
//       _quoteType: this.task.quoteType,
//       _contactID: this.task.contactID,
//       _taskDescription: this.task.taskDescription,
//       _taskDueDate: this.task.taskDueDate,
//       _taskType: this.task.taskType,

//     };
// debugger;

//     this._tasksService.updateTask(this.currentIndex,_data)
//       .subscribe(
//         response => {
//           console.log(response);
//           this.submitted = true;
//         },
//         error => {
//           console.log(error);
//         });
//   }

  saveTask(): void {
    const _data = this.currentTask;
    const _taskID=_data.QuoteID;
    debugger;
    this._tasksService.updateTask(_taskID , _data)
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

export class DatepickerMinMaxExample {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
}
