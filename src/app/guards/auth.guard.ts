import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { PostsService } from '../services/posts/posts.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private postSvc: PostsService, private router: Router){

  }
  canActivate(): boolean  {
    if(this.postSvc.isLoged()){
      console.log("Paso");
      return true;
    } else {
      console.log("No paso");
      this.router.navigateByUrl('/login')
      return false;
    }
  }


  
}
