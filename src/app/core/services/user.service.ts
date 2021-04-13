import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  SharingData: BehaviorSubject<any> =  new BehaviorSubject(null);

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
  setData(value: any){
    console.log(value);
      this.SharingData.next(value);
    
    localStorage.setItem('userLoginDetails', JSON.stringify(value));
  }
}
