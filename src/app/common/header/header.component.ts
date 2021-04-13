import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message: any
  subscription!: Subscription;
  userDetails: any
  jsonData: any

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.userDetails = localStorage.getItem('userLoginDetails');
    this.jsonData = JSON.parse(this.userDetails);
  }

  logOut(){
    localStorage.removeItem("userLoginDetails");
    window.location.reload();
  }
}
