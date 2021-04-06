import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

  dbdata:any
  id:any
  firstname:any
  lastname:any
  email:any
  phone:any
  profile:any

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.httpClient.get('http://localhost:9007/users').subscribe((data:any) =>{
      console.log(data);
      this.dbdata=data.data
      console.log(this.dbdata)
      console.log(this.dbdata[0].first_name)
      },
      err=>{
        console.log(err.error.message)
       })
  }


  onDelete(id:any){
    this.httpClient.delete('http://localhost:9007/delete/'+id).subscribe((data:any) =>{
      console.log(data);   
    })
  }


  onEdit(data:any,index:any){
    this.id=index
    this.firstname=data.first_name
    this.lastname=data.last_name
    this.email=data.email
    this.phone=data.phone_number
    this.profile=data.profile_picture
  }


  onSave(){
    console.log(this.profile);
    this.httpClient.put('http://localhost:9007/update/'+this.id,{firstname:this.firstname,lastname:this.lastname,email:this.email,phone:this.phone}).subscribe((data:any) =>{
            console.log(data);
    })
  }
}    