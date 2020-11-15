import { Component, OnInit,Input,Inject  } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup,  FormBuilder,  Validators,FormControl  } from '@angular/forms';

import { TasksService } from '../taskList/tasks.service';
import { ITasks } from '../taskList/tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent{
  angForm: FormGroup;

  @Input() 
  newTask ={} ;
  currentTask  ={
    ContactID: "",
    QuoteType: "",
    TaskDescription: "",
    TaskDueDate: "2020-11-12T00:00:00",
    TaskType: ""
  } ;
  currentIndex = 0;

  private task= {
    quoteType: 'string',
    contactID: 'string',
    taskDescription: 'string',
    taskDueDate: 'string',
    taskType: 'string'
  };
  submitted = false;


  constructor(private _tasksService: TasksService,public dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) { 

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

  ngOnInit(): void {

  }
  closeModal() {
    this.dialogRef.close();
  }

  saveTask(): void {
    const _data = this.currentTask;

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
    newTaskMethod(): void {
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


