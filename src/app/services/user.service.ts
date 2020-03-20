import { Injectable } from '@angular/core';
import { User } from './user';
import { users } from './user_data';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return users;
  }
 
  getUser(username: string,password:string){
    let  x= users.filter( (usercheck)=> usercheck.username === username && usercheck.password === password);
    if(x.length>0)
      return x;
    else
    return false;
  }

  addUser(obj:User){
    users.push(obj);
  }

}
