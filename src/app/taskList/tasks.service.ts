import { Injectable,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";


import { ITasks, Tasks } from './tasks';

// The @Injectable() decorator is used to inject other dependencies
// into this service. As our service does not have any dependencies
// at the moment, we may remove the @Injectable() decorator and the
// service works exactly the same way. However, Angular recomends
// to always use @Injectable() decorator to ensures consistency
@Injectable(
  {
    providedIn: 'root'
  }
)
export class TasksService {
    public url ='https://localhost:44350/api/tasks';  
       // Inject Angular http service
    
    searchInfo:any;
       constructor(private _http: HttpClient) { }

       

       httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    
     // Notice the method return type is Observable<ITasks[]>
     getAllTasks(): Observable<ITasks[]> {
        // To convert Observable<Response> to Observable<ITasks[]>
        // we are using the map operator
        
        return this._http.get<ITasks[]>(this.url); 
        
    }

    getTaskById(id): Observable<Tasks> {  
        return this._http.get<Tasks>(`${this.url}/${id}`);  
      }  


    // public sendGETRequestWithParameters(_data){
    //      this.searchInfo=_data;
    //     let params = new HttpParams();
    //     return this._http.get(this.url, {params: params});
    //   }

      createTask(data): Observable<any> {  
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
        return this._http.post<Tasks>(this.url ,  data);  
      }  

      updateTask(id: number, data): Observable<Tasks> {  
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
        return this._http.put<Tasks>(`${this.url}/${id}`, data, httpOptions);  
      }  

      findByType(quoteType): Observable<any> {
        return this._http.get(`${this.url}?quoteType=${quoteType}`);
      }

      
      delete(id: number): Observable<any> {
        return this._http.delete(`${this.url}/${id}`);
      }


}