import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from 'src/app/services/posts/posts.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  postForm: FormGroup

  constructor( private postSvc: PostsService,
               private actvdRoute: ActivatedRoute,
               private router: Router
    ) { 
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      userId: new FormControl('', [Validators.required])
    })
    console.log(history.state.data); 
  }

  ngOnInit() {
  }

  createPost() {
    //console.log(this.postForm.value)
    this.postSvc.newPost(this.postForm.value)
      .subscribe( res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      })
  }

}
