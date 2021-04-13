import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  message: any
  subscription!: Subscription;
  userDetails: any
  jsonData: any
  id: any
  image:any
  imgD:any
  constructor(
    private httpc: HttpClient,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.imgD = localStorage.getItem("ImgD");
    this.userDetails = localStorage.getItem('userLoginDetails');
    this.jsonData = JSON.parse(this.userDetails);
    this.id = this.jsonData.id;
  }

  onUpload(){
    const formData = new FormData();
    formData.append('profile_pic', this.image);
    formData.append('id',this.id);
    this.httpc.post('http://localhost:9007/profile', formData).subscribe((data: any) => {
      localStorage.setItem("ImgD", data.image);
      this.imgD = localStorage.getItem("ImgD");
      console.log(data);
    })
  }

  onFileUpload(event:any){
    if(event.target.files.length>0){
    const file = event.target.files[0]
    this.image= file;
    }
  }

}
