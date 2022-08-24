import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import employeDetails from 'src/assets/employe.json';
@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  search1='';
  constructor(private _router:Router , private _activatedRouter:ActivatedRoute) { }
  ngOnInit(): void {
  }

}
