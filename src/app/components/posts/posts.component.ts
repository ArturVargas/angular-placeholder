import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postSvc: PostsService) { }

  ngOnInit() {
    this.getAllPosts()
  }

  getAllPosts(){
    
    this.postSvc.getPosts().subscribe(data =>{
      console.log(data);
    })
     
  }

}
