import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentService } from './student.service';
import { Page1Component } from './page1/page1.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardviewComponent } from './cardview/cardview.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule, PaginationService } from 'ngx-pagination';
import { ListviewComponent } from './listview/listview.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StudentListComponent,
    StudentDetailsComponent,
    Page1Component,
    CardviewComponent,
    SearchPipe,
    ListviewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,NgxBootstrapIconsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
