import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-create-book-form',
  templateUrl: './create-book-form.component.html',
  styleUrls: ['./create-book-form.component.css']
})
export class CreateBookFormComponent implements OnInit {
  @Input() formState: any;
  @Input() cartLength: any;
  public data: number = 0;
  public data2: number = 0;


  myForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private bookService: BookService, private router: Router, private service: CommonService) { }

  ngOnInit(): void {
    this.service.data$.subscribe(res => this.data = res)
    this.myForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', Validators.required],
      img: ['', [Validators.required, Validators.minLength(5), Validators.pattern('http.*')]]
    })

  }

  onSubmit(form: FormGroup) {

    if (form.valid) {
      console.log(form.value.title);
      console.log(form.value.author);
      console.log(form.value.img);

      this.bookService.addBook(new Book(0, form.value.title, form.value.author, form.value.img))
        .subscribe({
          next: (res) => {
            console.log(res)
            form.reset();
            this.router.navigate(['/books']);


          },
          error: (err) => { console.log(err) }
        })




    } else {
      console.log("invalid");
    }

  }

  validField(f: string) {
    const field = this.myForm.get(f);
    return (field?.invalid && field.errors && (field.dirty || field.touched));

  }
  hasMinLength(f: string) {
    const field = this.myForm.get(f);
    return !field?.hasError('minLength');

  }

  newData() {
    this.data2 = this.data + 1;
    // console.log(this.data++);
    this.service.changeData(++this.data);  //invoke new Data
  }


}


