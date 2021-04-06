import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  dbdata:any
  id:any
  user_id:any
  caption:any
  image:any
  send!:FormGroup;
  constructor(
    private httpc:HttpClient,
    private fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(){
    this.httpc.get('http://localhost:9007/list').subscribe((data:any) =>{
      console.log(data);
      this.dbdata=data.data
      console.log(this.dbdata)
      },
      err=>{
        console.log(err.error.message)
       })
      }


  onEdit(data:any,index:any){
        this.id=index
        this.caption=data.caption 
        }


  onSave(){
          this.httpc.put('http://localhost:9007/updateCap/'+this.id,{caption:this.caption}).subscribe((data:any) =>{
                  console.log("caption",data);
              })
        }


  onDelete(id:any){
          this.httpc.delete('http://localhost:9007/delpost/'+id).subscribe((data:any) =>{
          console.log(data);   
      })
        }


  initForm(){
         this.send = this.fb.group({
           user_id:[''],
           caption:['']
         });
       }


  onSend(){
         const formData = new FormData()
         formData.append('picture',this.image);
         console.log(formData)
         var user_id = this.send.controls.user_id.value;
         var caption =  this.send.controls.caption.value;
         formData.append('user_id',user_id);
         const httpOptions = {
          headers: new HttpHeaders({
            'userid': user_id,
            'caption':caption
          })
        };
         if(this.send.valid){
        this.httpc.post('http://localhost:9007/createPost',formData,httpOptions).subscribe((data:any)=>{
          console.log(data)
        })
         }
       }



  onFileUpload(event:any){
           if(event.target.files.length>0){
           const file = event.target.files[0]
           this.image= file;
           }
      }
  


}
