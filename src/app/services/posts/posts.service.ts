import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = "https://jsonplaceholder.typicode.com/posts"
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.url);
  }

  newPost(data) {
    console.log(data);
    let body = JSON.stringify({
      ...data
    })
    return this.http.post(this.url, body, this.httpOptions)
  }

  updatePost(data){
    console.log(data);
    
  }

}
