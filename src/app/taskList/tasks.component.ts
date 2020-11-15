import { Component, OnInit,Inject  } from '@angular/core';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatSortModule} from '@angular/material/sort';
import { HttpClient, HttpResponse } from '@angular/common/http';


import { VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, withLatestFrom, startWith, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AddTaskComponent } from '../add-task/add-task.component';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';

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
  taskDescription="";
  aa:boolean=false;
  // dtOptions: DataTables.Settings = {};

  setIndex(ii){
    this.aa=ii;
    console.log
  }

  formGroup: FormGroup;

  public tasksList: any;

  currentTask :ITasks;
  currentIndex = 0;
  quoteType = '';
  taskID='';
  p: number = 1;
  config: any;

  page = 1;
  count = 0;
  tableSize = 5;
  rowsPerPage: number= this.tableSize;
  tableSizes = [5, 10, 15, 20];
  
  selectedTasksCountRadioButton: string = 'All';
  public searchString: string;


  // Inject TasksService using the constructor
    // The private variable _tasksService which points to
    // TasksService singelton instance is then available
    // throughout this class
    constructor(private _tasksService: TasksService,public matDialog: MatDialog,
      private modalService: NgbModal) {
        
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
       
      };
    }

    private getFoods() {
      return of([{ name: 'Food1' }, { name: 'Food2' }]).pipe(tap(console.log));
    }

    openAddModal() {
      const dialogConfig = new MatDialogConfig();
      // The user can't close the dialog by clicking outside its body
      dialogConfig.disableClose = true;
      dialogConfig.id = "modal-component";
      dialogConfig.height = "600px";
      dialogConfig.width = "1000px";
      // https://material.angular.io/components/dialog/overview
      const modalDialog = this.matDialog.open(AddTaskComponent, dialogConfig);
    }

    openConfirmModal(task) {
      const dialogConfig = new MatDialogConfig();
      // The user can't close the dialog by clicking outside its body
      dialogConfig.disableClose = true;
      dialogConfig.id = "modal-component";
      dialogConfig.height = "300px";
      dialogConfig.width = "500px";
      dialogConfig.data = task;
      // https://material.angular.io/components/dialog/overview
      const modalDialog = this.matDialog.open(DeleteConfirmComponent, dialogConfig);
    }

    openEditModal(task) {
      const dialogConfig = new MatDialogConfig();
      // The user can't close the dialog by clicking outside its body
      dialogConfig.disableClose = true;
      dialogConfig.id = "modal-component";
      dialogConfig.height = "600px";
      dialogConfig.width = "1000px";
      dialogConfig.data = task;
      // https://material.angular.io/components/dialog/overview
      //const modalRef = this.modalService.open(EditTaskComponent);
      //modalRef.componentInstance.taskInfo = this.currentTask;
      const modalDialog = this.matDialog.open(EditTaskComponent,  dialogConfig);
      
    }
  // In ngOnInit() life cycle hook call the getTasks()
    // service method of TasksService using the private
    // variable _tasksService
    ngOnInit() : void{
      // this.tasksList = this._tasksService.getAllTasks();
      
      // this.dtOptions = {
      //   pagingType: 'full_numbers',
      //   lengthMenu: [ 5, 10, 25 ]
      // };
      this.retrieveTasks();
  }




  retrieveTasks(): void {
    this._tasksService.getAllTasks()
      .subscribe(
        tasksData => {this.tasksList = tasksData;},
          error=>{console.log(error);}
          );
  }

  onTableDataChange(event){
    this.page = event;
    this.retrieveTasks();
  }  

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    if(this.tableSize>this.tasksList.length)
    {this.rowsPerPage=this.tasksList.length}
    else{
      this.rowsPerPage=this.tableSize
    }
    this.retrieveTasks();
  }  

  refreshList(): void {
    this.retrieveTasks();
    this.currentTask = null;
    this.currentIndex = 0;
  }

  setActiveTask(task, index): void {

    this.currentTask = task;
    this.currentIndex = index;
  }

  searchById(): void {
    this._tasksService.getTaskById(this.taskID)
      .subscribe(
        data => {
          this.tasksList = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  searchQuoteType(): void {
    this._tasksService.findByType(this.quoteType)
      .subscribe(
        data => {
          this.tasksList = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  
  deleteTask(): void {
    this._tasksService.delete(this.currentIndex)
      .subscribe(
        response => {
          console.log(response);
          
        },
        error => {
          console.log(error);
        });
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
