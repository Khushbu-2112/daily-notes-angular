import { Component, OnInit, DoCheck, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
username:string;
  constructor(private route:Router,private auth:AuthenticationService) { 
    this.username = localStorage.getItem('user') || " ";
  }

  ngOnInit() {
  }

  ngDoCheck(changes:SimpleChange){
    this.username = localStorage.getItem('user') || " ";
  }

  checkUser(){
    if(this.auth.loggedIn)
    {
      this.logout();
    }
    else{
      this.route.navigate(['']);
    }
  }

  logout(){
    this.auth.logout();
    this.route.navigate(['']);
  }
  
}
