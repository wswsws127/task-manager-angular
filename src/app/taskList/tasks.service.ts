import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { map } from 'rxjs/operators';


import { ITasks, Tasks } from './tasks';

// The @Injectable() decorator is used to inject other dependencies
// into this service. As our service does not have any dependencies
// at the moment, we may remove the @Injectable() decorator and the
// service works exactly the same way. However, Angular recomends
// to always use @Injectable() decorator to ensures consistency
@Injectable()
export class TasksService {
    private url ='https://localhost:44350/api/tasks';  
       // Inject Angular http service
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

    getTaskById(taskID: string): Observable<Tasks> {  
        return this._http.get<Tasks>(`${this.url}/${taskID}`);  
      }  

      createTask(data): Observable<any> {  
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
        return this._http.post<Tasks>(this.url ,  data);  
      }  

      updateTask(id: number, data): Observable<Tasks> {  
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
        return this._http.put<Tasks>(this.url , data, httpOptions);  
      }  

      findByTitle(title): Observable<any> {
        return this._http.get(`${this.url}?title=${title}`);
      }

      
      delete(id: number): Observable<any> {
        return this._http.delete(`${this.url}/${id}`);
      }


}