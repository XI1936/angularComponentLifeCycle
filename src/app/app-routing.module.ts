import { ChildComponent } from './child/child.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'home',component:ParentComponent},
  {path:'child',component:ChildComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
