import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  


import { AppComponent } from './app.component';
import { SharedModule } from  './shared/shared.module';
import {CustomersModule} from './customers/customers.module';
import { HighlightDirective } from './highlight.directive';
import { TasksComponent } from './taskList/tasks.component';
import { AppRoutingModule } from './app-routing.module';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './taskList/tasks.service';



@NgModule({
  imports: [BrowserModule, CustomersModule, SharedModule,HttpClientModule, FormsModule,
     AppRoutingModule],
  declarations: [AppComponent, HighlightDirective, TasksComponent,AddTaskComponent],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule],
  providers: [TasksService]
})
export class AppModule { }
