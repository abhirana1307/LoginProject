import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SearchCountryField, CountryISO} from 'ngx-intl-tel-input';
import { Api } from 'src/app/core/api';
import { constant } from 'src/app/core/const';
import { HttpService } from 'src/app/core/services/http.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  signup!: FormGroup;
  submitted:boolean=false;
  trueconfirmpassword=false;
  valid=false;

  constructor(
    private http: HttpService,
    private fb:FormBuilder,
    private router: Router,
    private dataSharing: UserService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.signup=this.fb.group({
    firstname:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern(constant.NAME)]],
    lastname:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern(constant.NAME)]],
    email:['',[Validators.required,Validators.pattern(constant.EMAIL)]],
    phone:['',[Validators.required]],
    password:['',[Validators.required,Validators.pattern(constant.PASSWORD)]],
    confirmPassword:['',[Validators.required]]},
      {validator: ConfirmedValidator('password', 'confirmPassword')
    })
    console.log(this.signup)
    function ConfirmedValidator(controlName: string, matchingControlName: string){
      return (formGroup: FormGroup) => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];
          if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
              return;
          }
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ confirmedValidator: true });
          } else {
              matchingControl.setErrors(null);
          }
      }
    }
  }
  onSubmit(){
    console.log(this.signup.value)
    console.log(this.signup)
    //console.log(this.signup.controls.firstname);
    // const passvalue=this.signup.controls.password.value
    // const conpassvalue=this.signup.controls.confirm_password.value
    this.submitted=true;
    this.signup.value.phone = this.signup.controls.phone.value.number;
    // this.valid=true
    // if(passvalue != conpassvalue){
    //  this.trueconfirmpassword=true
    // }
    // else{
    //  this.trueconfirmpassword=false
    // }
    if(!this.signup.invalid){
      console.log(this.signup.value);
      this.http.postData(Api.apiPath.signup, this.signup.value).subscribe((res:any) =>{
        console.log(res);
        console.log(res.status);
        alert(res.message);

      localStorage.setItem('userLoginDetails', JSON.stringify(res));
      this.router.navigateByUrl('/layout');
      this.dataSharing.setData(res.data[0]);

      }, err => {
        console.log(err);
        alert(err.message);
      });
      //this.submitted = false;
    }  
  } 
}