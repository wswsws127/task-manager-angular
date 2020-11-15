import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app2.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent  {
  

  color : string;
  constructor(public matDialog: MatDialog){  
  }

  // ngOnInit(){
  // }

}
