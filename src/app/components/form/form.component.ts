import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  postForm: FormGroup

  constructor() { 
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      userId: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  createPost() {
    console.log(this.postForm.value)
  }

}
