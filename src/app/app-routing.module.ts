import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDisplayComponent } from './components/book-display/book-display.component';
import { CreateBookFormComponent } from './components/create-book-form/create-book-form.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books', pathMatch: 'full'
  },
  {
    path: 'books',
    component: BookDisplayComponent
  },
  {
    path: 'bookform',
    component: CreateBookFormComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
