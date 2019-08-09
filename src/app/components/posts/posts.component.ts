import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  constructor(private postSvc: PostsService, private router: Router) { }

  ngOnInit() {
    this.getAllPosts()
  }

  getAllPosts(){
    this.postSvc.getPosts().subscribe(data =>{
      console.log(data)
      this.posts = data;
    }) 
  }

  seePost(postId){
    console.log(postId);
    this.router.navigate(['/post', postId])
  }

}
