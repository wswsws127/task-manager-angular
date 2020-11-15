import { Component, OnInit,Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { TasksService } from '../taskList/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {
  @Input() taskInfo :any;
  
  currentIndex = 0;
  currentTask = null;
  message = '';

  constructor(private _tasksService: TasksService,
    private route: ActivatedRoute,
    private router: Router,
    public dialogRef: MatDialogRef<DeleteConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.message = '';
    // this.getTask(this.route.snapshot.paramMap.get('id'));
    this.currentTask = this.data;
    this.currentIndex=this.data.QuoteID;
    
  }

  deleteTask(){
    this._tasksService.delete(this.currentTask.QuoteID)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tasks']);
          alert("The recorded has been deleted.");
          this.closeModal();
          //todo:删除成功后转到/tasks
        },
        error => {
          console.log(error);
        });
  }


  closeModal() {
    this.dialogRef.close();
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
}
