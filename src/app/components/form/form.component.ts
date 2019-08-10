import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from 'src/app/services/posts/posts.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  postForm: FormGroup
  dataUp;
  btnLabel = "Enviar";

  constructor( private postSvc: PostsService,
    ) { 
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      userId: new FormControl('', [Validators.required])
    })
    this.dataUp = history.state.data;
    console.log(history.state.data); 
  }

  ngOnInit() {
    if(this.dataUp){
      this.setForm();
    }
  }

  setForm() {
    this.btnLabel = "Actualizar";
    this.postForm.get("title").setValue(this.dataUp.title);
    this.postForm.get("body").setValue(this.dataUp.body);
    this.postForm.get("userId").setValue(this.dataUp.userId);
  }

  createPost() {
    //console.log(this.postForm.value)
    if(this.dataUp['id']){

      this.postSvc.updatePost(this.postForm.value, this.dataUp['id'])
        .subscribe( res => {
          console.log(res);
        }, (err) => {
          console.log(err)
        })

    } else {
    this.postSvc.newPost(this.postForm.value)
      .subscribe( res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      })
    }
  }

}
