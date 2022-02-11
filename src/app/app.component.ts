import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'book';
  formState: boolean = true;

  toggleForm() {
    console.log('toggle' + this.formState)
    this.formState = !this.formState;
  }

}
