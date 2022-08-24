import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls:['./test.component.css']
   
})
export class TestComponent implements OnInit {
public name="Ramesh";
public myID="testid";
public successClass="text-success";
public isdisabled=true;
public hasError=true;
public isSpecial=true;
public messageclasses={
  "text-success":!this.hasError,
  "text-danger":this.hasError,
  "this.special":this.isSpecial
}
  constructor() { }

  ngOnInit(): void {
  }

}
