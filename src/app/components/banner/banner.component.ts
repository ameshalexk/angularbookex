import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

declare var window: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  // @Input() cartLength: any;


  public cartLength: any;
  formModal: any;

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.service.data$.subscribe(res => this.cartLength = res)  //read the invoked data or default data
    console.log(this.formModal)
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );

  }

  openModal() {
    // console.log(this.formModal)

    this.formModal.show();
  }
  closeModal() {
    this.formModal.hide();
  }

}
