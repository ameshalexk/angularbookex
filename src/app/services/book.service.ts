import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url: string = 'http://localhost:8080/api/book/';

  constructor(private http: HttpClient) { }

  getAllBooks() {
    // console.log('Get all books')
    return this.http.get<Book[]>(this.url)
  }
  getBookById(id: number) {
    return this.http.get<Book>(this.url + "/" + id)
  }
  addBook(newBook: Book) {
    return this.http.post<Book>(this.url, newBook)
  }
  updateBook(updatedBook: Book) {
    return this.http.put<Book>(this.url, updatedBook)
  }
  deleteBookById(id: number) {
    return this.http.delete(this.url + "/" + id);
  }


}
