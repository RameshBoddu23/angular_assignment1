import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardviewComponent } from './cardview/cardview.component';
import { Page1Component } from './page1/page1.component';
import { ListviewComponent } from './listview/listview.component';

const routes: Routes = [
  {path:"CardviewComponent",component:CardviewComponent},
  {path:"Page1Component",component:Page1Component},
  {path:"ListviewComponent", component:ListviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
