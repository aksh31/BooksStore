import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book-list/component/book/book.component';
import { BookDetailsComponent } from './book-list/component/book-details/book-details.component';
import { RouterModule, Routes } from '@angular/router';



const appRoutes : Routes = [
  // {path : '', component : BookListComponent},
  {path : '', redirectTo : 'books', pathMatch: 'full'},
  {path : 'books', component : BookListComponent, children : [
    {path : ':isbn', component : BookDetailsComponent},
  ]},
]
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
