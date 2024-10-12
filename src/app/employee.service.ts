import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http :HttpClient) { }
  private _url:string="/assets/Data/employee.json"
  getEmployee():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(catchError((err)=>
      {
      return throwError(err.message||"server error")
    })
  )
  }
}
//CRUD
//create,read,update,delete
