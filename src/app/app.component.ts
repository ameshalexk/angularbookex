import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'book';
  formState: boolean = false;
  cartLength: any = 0;

  constructor(private service: CommonService) { }

  ngOnInit() {
    this.service.data$.subscribe(res => this.cartLength = res)  //read the invoked data or default data
  }


  toggleForm() {
    console.log('toggle' + this.formState)
    this.formState = !this.formState;
  }

  // changeFromSibling(event: any) {
  //   console.log(event + "event");
  //   console.log(this.cartLength + "cartlengths");

  //   this.cartLength = event;
  // }



}
