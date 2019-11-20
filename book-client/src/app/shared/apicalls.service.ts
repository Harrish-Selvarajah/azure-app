import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiCallsService {
    formData: Book;
    URL = 'https://localhost:44392/api';
    bookList: Book[];

    constructor(private http: HttpClient) { }

    addBookService(formData: Book) {
        return this.http.post(this.URL + '/Books', formData);
    }

    getBooksService() {
        this.bookList = [];
        this.http.get(this.URL + '/Books')
            .toPromise()
            .then(res => this.bookList = res as Book[]);
    }

    deleteBookService(Id) {
        return this.http.delete(this.URL + '/Books/' + Id);
    }

}
