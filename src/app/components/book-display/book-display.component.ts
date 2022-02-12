import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {
  // @Output() nameEvent = new EventEmitter<any>();
  // @Input() cartLength: any;



  public bookList: any = [{ "id": 1, "title": "Corduroy", "author": "Don Freeman", "img": "https://m.media-amazon.com/images/I/51sIORH4JqL.jpg" }, { "id": 2, "title": "The Very Hungry Caterpillar", "author": "Eric Carle", "img": "https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL.jpg" }, { "id": 3, "title": "Goodnight Moon", "author": "Margaret Wise Brown", "img": "https://images-na.ssl-images-amazon.com/images/I/91WuHblNkEL.jpg" }, { "id": 4, "title": "The Rainbow Fish", "author": "Marcus Pfister", "img": "https://images-na.ssl-images-amazon.com/images/I/91pdllYEUfL.jpg" }];
  public cart: any = [];
  public cartLength: number = this.cart.length;

  constructor(private bookService: BookService, private service: CommonService) { }

  ngOnInit(): void {
    this.service.data$.subscribe(res => this.cartLength = res)

    this.reloadBookData();
  }

  reloadBookData() {
    this.bookService.getAllBooks().subscribe({
      next: (response) => { this.bookList = response },
      error: (error) => { console.log(error) },
      // complete: () => { console.log("complete") }
    }

    );
  }
  deleteBookById(id: any) {
    this.bookService.deleteBookById(id).subscribe({
      next: (response) => {
        console.log(response)
        this.reloadBookData()
      },
      error: (error) => { console.log(error) },
    }

    );
  }
  getBookById(id: any) {
    this.bookService.getBookById(id).subscribe({
      next: (response) => {
        console.log(response)
        // this.reloadBookData()
      },
      error: (error) => { console.log(error) },
    }

    );
  }
  addToCart(id: any) {
    this.bookService.getBookById(id).subscribe({
      next: (response) => {
        const index = this.cart.indexOf(id);
        if (index === -1) {
          this.cart.push(response)
          // this.nameEvent.emit(this.cart.length);
          this.service.changeData(this.cart);
          console.log(this.cart.length + "lenghts of cart.length")
          console.log(this.cartLength + "lenghts of cartlength")

        }
        console.log(this.cart)

      },
      error: (error) => { console.log(error) },
    }

    );
  }
  removeFromCart(id: any) {
    const index = this.cart.indexOf(id);
    if (index > -1) {
      this.cart.splice(index, 1);
    }

  }

}


