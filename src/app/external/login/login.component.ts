import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Api } from 'src/app/core/api';
import { constant } from 'src/app/core/const';
import { HttpService } from 'src/app/core/services/http.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  submitted:boolean=false;
  valid=false;

  constructor(
    private http:HttpService,
    private fb:FormBuilder,
    private router: Router,
    private userSer: UserService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.login = this.fb.group({
      email:['',[Validators.required,Validators.pattern(constant.EMAIL)]],
      password:['',[Validators.required,Validators.pattern(constant.PASSWORD)]]
    })
    console.log(this.login);
  }

  onSubmit(){
    console.log(this.login);
    this.submitted=true;
    if(!this.login.invalid){
      console.log(this.login.value);
      this.http.postData(Api.apiPath.login, this.login.value).subscribe((res:any) => {
        alert(res.message);
        this.userSer.afterLogin(res.data);
      })
      // this.httpy.post('http://localhost:9007/login', this.login.value).subscribe((res:any) => {
      //   console.log(res);
      //   alert(res.message);


      //   this.router.navigateByUrl('/layout')
      // },err => {
      //   console.log(err);
      //   alert(err.message);
      // });
      //this.submitted = false;
    }

  }
}
