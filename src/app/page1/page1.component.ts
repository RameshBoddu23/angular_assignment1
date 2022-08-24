import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  constructor(private _router:Router, private _activateRouter : ActivatedRoute) { }
  ngOnInit(): void {
  }
  Cardview(){
    this._router.navigate(['card-view']);
  }
  Listview()
  {
    this._router.navigate(['ListviewComponent']);
  }
}
