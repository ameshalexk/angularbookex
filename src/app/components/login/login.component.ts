import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    if (form.valid) {
      console.log(form.value);
      console.log(this.username);

    } else {
      console.log('Form not valid');
    }

  }

}
