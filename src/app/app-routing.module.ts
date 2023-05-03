import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuybookComponent } from './buybook/buybook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';

const routes: Routes = [
  {path:'', component:BuybookComponent},
  {path:'viewbook', component:ViewbookComponent},
  {path:'updatebook/:id',component:UpdatebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
