import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.viewBookList();
  }

  viewBookList(): void {

  }

  addBook(): void {

  }

  deleteBook(): void {

  }

  editBook(): void {

  }

}
