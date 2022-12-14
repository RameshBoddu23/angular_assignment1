import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public students:any=[]
  constructor(private stdservice: StudentService) { }

  ngOnInit(): void {
    this.students  = this.stdservice.getStudent();
  }

}
