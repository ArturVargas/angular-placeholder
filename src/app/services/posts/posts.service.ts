import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = "https://jsonplaceholder.typicode.com/posts";
  token = "sgrshehje43246tew";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.url);
  }

  getPost(id) {
    const uri = `${this.url}/${id}`;
    return this.http.get(uri)
  }

  newPost(data) {
    console.log(data);
    let body = JSON.stringify({
      ...data
    })
    return this.http.post(this.url, body, this.httpOptions)
  }

  updatePost(data, id){
    console.log(data, id);
    const uri = `${this.url}/${id}`;
    let body = JSON.stringify({
      id: id,
      title: data.title,
      body: data.body,
      userId: data.userId
    })
    return this.http.put(uri, body, this.httpOptions);
  }

  isLoged() {
    if(this.token.length > 300){
      return true
    } else {
      return false
    }
  }

}
