import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private route:Router) { }

  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    if(localStorage.getItem('user')){
      return true;
    }
    this.route.navigate(['']);
    return false;
  }

}
