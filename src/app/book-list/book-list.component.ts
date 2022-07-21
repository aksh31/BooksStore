import { Component, OnInit } from '@angular/core';
import { Ibook } from '../shared/model/data';
import { BookService } from '../shared/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  booksArray : Ibook[] = [];
  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.booksArray = this.bookService.getBooks();
  }

}
