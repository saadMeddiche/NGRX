import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book-list/books.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() removee = new EventEmitter<string>();
}
