import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  name=''
  email=''
  private=''
  onSubmit(form : NgForm){
    console.log('your form data :',form.value);
    console.log(form.value.fullName)
this.name=form.value.fullName
this.email=form.value.email
this.private=form.value.isprivate
  }

  
}
