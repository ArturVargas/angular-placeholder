import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id;
  infoPost;

  constructor(private actvdRoute: ActivatedRoute, 
              private postSvc: PostsService,
              private router: Router
              ) {
    this.actvdRoute.params.subscribe(params => {
       this.id = params.id
    })
   }

  ngOnInit() {
    this.getInfo();
  }

  getInfo(){
    this.postSvc.getPost(this.id)
      .subscribe(data => {
        console.log(data);
        this.infoPost = data;
      })
  }

  sendInfo(){
    this.router.navigate(['/update/post', this.id], {state: {data: this.infoPost}})
  }
}
