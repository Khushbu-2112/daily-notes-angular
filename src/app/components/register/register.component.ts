import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserService,private route:Router) { }

  ngOnInit() {
  }

  fname: string;
  lname: string;
  email: string;
  phoneno: string;
  username: string;
  password: string;

  objt:User = { fname:this.fname, lname:this.lname,email: this.email, phoneno:this.phoneno, username:this.username, password:this.password };

  singUp() {
    this.service.addUser(this.objt);
    localStorage.setItem('user',this.objt.username);
    this.route.navigate(['home']);
  }


}
