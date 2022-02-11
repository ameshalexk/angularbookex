import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {

  public bookList: any = [{ "id": 1, "title": "Corduroy", "author": "Don Freeman", "img": "https://m.media-amazon.com/images/I/51sIORH4JqL.jpg" }, { "id": 2, "title": "The Very Hungry Caterpillar", "author": "Eric Carle", "img": "https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL.jpg" }, { "id": 3, "title": "Goodnight Moon", "author": "Margaret Wise Brown", "img": "https://images-na.ssl-images-amazon.com/images/I/91WuHblNkEL.jpg" }, { "id": 4, "title": "The Rainbow Fish", "author": "Marcus Pfister", "img": "https://images-na.ssl-images-amazon.com/images/I/91pdllYEUfL.jpg" }];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.reloadBookData();
  }

  reloadBookData() {
    this.bookService.getAllBooks().subscribe({
      next: (response) => { this.bookList = response },
      error: (error) => { console.log(error) },
      complete: () => { console.log("complete") }
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



}
