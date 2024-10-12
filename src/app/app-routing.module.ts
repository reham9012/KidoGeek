import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { CourseDetailsComponent } from './course-details/course-details.component';

const routes: Routes = [

  {path:"aboutus",component:AboutUsComponent},
  {path:"courseDetails",component:CourseDetailsComponent},
  // {path:"results",component:ResultsComponent},
  // {path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
