import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import{SessionService} from '../service/sessionService';
import { flatMap } from 'tslint/lib/utils';


@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {

  constructor(private sessionService: SessionService,  private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
     console.log("dashboard gurad")
     if (this.sessionService.staff===null){
      alert('You are not authorized')
      return false;
     }
     try {
        console.log(this.sessionService.staff);
           return true;
     }
     catch (error) {
 }
    return false;
    }

  }
