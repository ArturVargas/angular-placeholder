import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'posts', component: PostsComponent},
  {path:'post/:id', component: PostComponent},
  {path:'newpost', component: FormComponent},
  { path:'', pathMatch:'full',redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
