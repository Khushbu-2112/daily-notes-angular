import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private you:UserService){}

  login(username:string,password:string){
    if(this.you.getUser(username,password)){
      localStorage.setItem('user',username);
      return true;
    }
  }

  logout(){
    localStorage.removeItem('user');
  }

  public get loggedIn():boolean{
    return (localStorage.getItem('user')!==null);
  }
  
}

