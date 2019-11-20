import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiCallsService } from '../shared/apicalls.service';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookList = [
    {
      id: '1',
      name: 'Harry Potter',
      author: 'J. K. Rowling'
    },
    {
      id: '2',
      name: 'Alex Rider',
      author: ' Anthony Horowitz'
    },
    {
      id: '3',
      name: ' In Search of Lost Time',
      author: 'Marcel Prous'
    }
  ];

  constructor(private apiCalls: ApiCallsService) { }

  ngOnInit() {
    this.viewBookList();
  }

  addBook(form: NgForm): void {
    const obj = new Book(0, form.value.Name, form.value.Author);
    console.log(obj);
    this.apiCalls.addBookService(obj).subscribe(
      res => {
        this.resetForm(form);
        this.apiCalls.getBooksService();
      },
      err => {
        console.log(err);
      }
    );
  }

  viewBookList(): void {
    this.apiCalls.getBooksService();
  }

  editBook(x: Book): void {
    this.apiCalls.formData = x;
  }

  deleteBook(Id: number): void {
    this.apiCalls.deleteBookService(Id)
      .subscribe(res => {
        this.viewBookList();
      },
        err => {
          console.log(err);
        })
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

}
