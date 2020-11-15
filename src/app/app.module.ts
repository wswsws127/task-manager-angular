import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDialogModule} from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './material.module';
import {Pipe} from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './taskList/FilterPipe';

import {Location} from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import {MatIconModule} from '@angular/material/icon';



import {MatCalendar} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from '@angular/material/core';
import {from, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';


import {MAT_DIALOG_DATA} from '@angular/material/dialog'

import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  


import { AppComponent } from './app.component';
import { SharedModule } from  './shared/shared.module';
import {CustomersModule} from './customers/customers.module';
import { HighlightDirective } from './highlight.directive';
import { TasksComponent } from './taskList/tasks.component';
import { AppRoutingModule } from './app-routing.module';
import { AddTaskComponent  } from './add-task/add-task.component';
import { TasksService } from './taskList/tasks.service';
import {TaskDetailsComponent} from './task-details/task-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import {SortDirective} from './directive/sort.derective';


@NgModule({
  imports: [BrowserModule, CustomersModule, SharedModule,HttpClientModule, FormsModule,NgxPaginationModule,
     AppRoutingModule, HttpClientModule, MaterialModule,ReactiveFormsModule,
     BrowserAnimationsModule,MatButtonModule,MatDialogModule, NgbModule,
     DataTablesModule, 
    ],
  declarations: [AppComponent, HighlightDirective, TasksComponent,AddTaskComponent,
    TaskDetailsComponent, DeleteConfirmComponent, EditTaskComponent,SearchPipe,
    SortDirective,FilterPipe
    ],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule,SortDirective],
  providers: [TasksService],
  entryComponents: [AddTaskComponent,DeleteConfirmComponent,EditTaskComponent],
  
})
export class AppModule { }
