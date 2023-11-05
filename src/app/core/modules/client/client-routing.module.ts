import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentlistComponent } from './currentlist/currentlist.component';

const routes: Routes = [
  {path: 'currentlist', component: CurrentlistComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
