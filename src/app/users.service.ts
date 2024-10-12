import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  users:any[]=[
    {userName:"ahmed",password:"1234",role:"admin"},
    {userName:"ali",password:"1234",role:"editor"},
    {userName:"mohamed",password:"1234",role:"user"}
  ]
}
