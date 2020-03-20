import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(private auth:AuthenticationService,private router:Router) {
    if(this.auth.loggedIn)
      this.router.navigate(['home']);
  }

  login():void{
    if(this.username!='' && this.password!=''){
      if(this.auth.login(this.username,this.password)){
        this.router.navigate(["home"]);
      }
      else
        alert('Invalid credentials');
    }
  }

  ngOnInit() {
  }

}
