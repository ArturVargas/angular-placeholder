import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = "https://jsonplaceholder.typicode.com/posts"
  options;

  constructor(private http: HttpClient, private headers: HttpHeaders) {
      this.options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
   }

  getPosts() {
    return this.http.get(this.url);
  }

  newPost(data) {
    let body = {

    }
    return this.http.post(this.url, body, this.options)
  }
}
