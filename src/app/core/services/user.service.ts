import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router:Router
  ) { }
  afterLogin(data:any){
    localStorage.setItem("userLoginDetails", JSON.stringify(data));
    this.toHome();
  }
  toHome(){
    this.router.navigate(['/layout'])
  }
  logout(){
    localStorage.removeItem("userLoginDetails");
    this.router.navigate(["/login"])
  }
}
